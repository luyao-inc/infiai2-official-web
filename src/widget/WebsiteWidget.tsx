import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'

type Appearance = {
  themeColor: string
  avatarURL?: string
  position: string
  welcomeMessage: string
  launcherLabel: string
  footerText: string
}

type Bootstrap = {
  widgetId: string
  name: string
  agentName: string
  status: string
  appearance: Appearance
}

type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  text: string
  status: 'processing' | 'succeeded' | 'failed'
  createdAt: number
  references?: Array<{ title: string; url: string }>
}

type StoredSession = {
  token: string
  sessionId: string
  expiresAt: number
}

type WidgetLayoutMode = 'desktop' | 'mobile'

const query = new URLSearchParams(window.location.search)
const widgetId = query.get('widgetId')?.trim() ?? ''
const apiBase = (query.get('apiBase')?.trim() ?? '').replace(/\/$/, '')
const declaredOrigin = query.get('origin')?.trim() ?? ''
const parentOrigin = (() => {
  try {
    return document.referrer ? new URL(document.referrer).origin : declaredOrigin
  } catch {
    return ''
  }
})()
const storageKey = `infiai_widget_v1:${widgetId}:${parentOrigin}`

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 5.8A3.8 3.8 0 0 1 8.8 2h6.4A3.8 3.8 0 0 1 19 5.8v5.4a3.8 3.8 0 0 1-3.8 3.8H11l-4.8 4v-4.2A3.8 3.8 0 0 1 5 12V5.8Z" />
    <path d="m16.9 4.2.45 1.25 1.25.45-1.25.45-.45 1.25-.45-1.25-1.25-.45 1.25-.45.45-1.25Z" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m7 7 10 10M17 7 7 17" />
  </svg>
)

const SendIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m3.8 4.2 16.6 7.3-16.6 7.3 2-6.1 8.3-1.2-8.3-1.2-2-6.1Z" />
  </svg>
)

function WidgetAvatar({ url, small = false }: { url?: string; small?: boolean }) {
  return (
    <div className={small ? 'small-avatar' : 'avatar'}>
      {url ? <img src={url} alt="" /> : <ChatIcon />}
    </div>
  )
}

function shouldShowTimeDivider(messages: ChatMessage[], index: number) {
  if (index === 0) return true
  return messages[index].createdAt - messages[index - 1].createdAt > 5 * 60 * 1000
}

function formatDividerTime(timestamp: number) {
  const date = new Date(timestamp)
  const now = new Date()
  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)
  const sameDay = (left: Date, right: Date) =>
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  const time = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false })
  if (sameDay(date, now)) return time
  if (sameDay(date, yesterday)) return `昨天 ${time}`
  return `${date.getMonth() + 1}月${date.getDate()}日 ${time}`
}

function parseStoredSession(): StoredSession | null {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) ?? 'null') as StoredSession | null
    return parsed && parsed.expiresAt > Date.now() + 30_000 ? parsed : null
  } catch {
    return null
  }
}

function visitorId() {
  const key = `${storageKey}:visitor`
  const existing = localStorage.getItem(key)
  if (existing) return existing
  const created = `visitor_${crypto.randomUUID()}`
  localStorage.setItem(key, created)
  return created
}

async function readError(response: Response) {
  try {
    const body = (await response.json()) as { message?: string }
    return body.message ?? `请求失败 (${response.status})`
  } catch {
    return `请求失败 (${response.status})`
  }
}

export default function WebsiteWidget() {
  const [open, setOpen] = useState(false)
  const [bootstrap, setBootstrap] = useState<Bootstrap | null>(null)
  const [session, setSession] = useState<StoredSession | null>(() => parseStoredSession())
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [layoutMode, setLayoutMode] = useState<WidgetLayoutMode>('desktop')
  const endRef = useRef<HTMLDivElement>(null)
  const welcomeAt = useRef(Date.now())
  const appearance = bootstrap?.appearance
  const themeColor = appearance?.themeColor ?? '#6D5DFB'

  const headers = useMemo(
    () => ({ 'Content-Type': 'application/json', 'X-Widget-Origin': parentOrigin }),
    [],
  )

  useEffect(() => {
    if (!widgetId || !apiBase || !parentOrigin || (declaredOrigin && declaredOrigin !== parentOrigin)) {
      setError('嵌入来源校验失败')
      return
    }
    const controller = new AbortController()
    fetch(`${apiBase}/widget/v1/${encodeURIComponent(widgetId)}/bootstrap`, {
      headers: { 'X-Widget-Origin': parentOrigin },
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error(await readError(response))
        return response.json() as Promise<Bootstrap>
      })
      .then(setBootstrap)
      .catch((reason: unknown) => {
        if (!controller.signal.aborted) setError(reason instanceof Error ? reason.message : '客服加载失败')
      })
    return () => controller.abort()
  }, [])

  useEffect(() => {
    const receiveLayout = (event: MessageEvent) => {
      if (
        event.source !== window.parent ||
        event.origin !== parentOrigin ||
        event.data?.source !== 'infiai-widget-host' ||
        event.data?.type !== 'layout'
      ) return
      setLayoutMode(event.data.mode === 'mobile' ? 'mobile' : 'desktop')
    }
    window.addEventListener('message', receiveLayout)
    return () => window.removeEventListener('message', receiveLayout)
  }, [])

  useEffect(() => {
    if (!parentOrigin) return
    window.parent.postMessage({
      source: 'infiai-widget',
      type: open ? 'open' : 'close',
      position: bootstrap?.appearance.position ?? 'bottom-right',
      label: bootstrap?.appearance.launcherLabel || bootstrap?.name || '客服',
      themeColor,
    }, parentOrigin)
  }, [open, bootstrap, themeColor])

  useEffect(() => {
    if (!open || !bootstrap || session) return
    const controller = new AbortController()
    fetch(`${apiBase}/widget/v1/${encodeURIComponent(widgetId)}/session`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ visitorId: visitorId() }),
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error(await readError(response))
        return response.json() as Promise<{ sessionToken: string; sessionId: string; expiresAt: number }>
      })
      .then((created) => {
        const next = { token: created.sessionToken, sessionId: created.sessionId, expiresAt: created.expiresAt }
        localStorage.setItem(storageKey, JSON.stringify(next))
        setSession(next)
      })
      .catch((reason: unknown) => {
        if (!controller.signal.aborted) setError(reason instanceof Error ? reason.message : '会话创建失败')
      })
    return () => controller.abort()
  }, [open, bootstrap, session, headers])

  useEffect(() => {
    if (!open || !session) return
    const controller = new AbortController()
    fetch(`${apiBase}/widget/v1/${encodeURIComponent(widgetId)}/history`, {
      headers: { ...headers, Authorization: `Bearer ${session.token}` },
      signal: controller.signal,
    })
      .then(async (response) => {
        if (response.status === 401) {
          localStorage.removeItem(storageKey)
          setSession(null)
          return { messages: [] }
        }
        if (!response.ok) throw new Error(await readError(response))
        return response.json() as Promise<{ messages: ChatMessage[] }>
      })
      .then((body) => setMessages(body.messages))
      .catch((reason: unknown) => {
        if (!controller.signal.aborted) setError(reason instanceof Error ? reason.message : '历史消息加载失败')
      })
    return () => controller.abort()
  }, [open, session, headers])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [messages, busy])

  async function submit(event: FormEvent) {
    event.preventDefault()
    const text = input.trim()
    if (!text || !session || busy) return
    const clientMessageId = crypto.randomUUID()
    const pending: ChatMessage = { id: clientMessageId, role: 'user', text, status: 'processing', createdAt: Date.now() }
    setMessages((current) => [...current, pending])
    setInput('')
    setBusy(true)
    setError('')
    try {
      const response = await fetch(`${apiBase}/widget/v1/${encodeURIComponent(widgetId)}/messages`, {
        method: 'POST',
        headers: { ...headers, Authorization: `Bearer ${session.token}` },
        body: JSON.stringify({ clientMessageId, text }),
      })
      if (!response.ok) throw new Error(await readError(response))
      const body = (await response.json()) as { messageId: string; replyText: string; updatedAt?: number; references?: Array<{ title: string; url: string }> }
      setMessages((current) => [
        ...current.map((item) => (item.id === clientMessageId ? { ...item, status: 'succeeded' as const } : item)),
        { id: `${body.messageId}_reply`, role: 'assistant', text: body.replyText, references: body.references, status: 'succeeded', createdAt: body.updatedAt ?? Date.now() },
      ])
    } catch (reason) {
      setMessages((current) =>
        current.map((item) => (item.id === clientMessageId ? { ...item, status: 'failed' as const } : item)),
      )
      setError(reason instanceof Error ? reason.message : '消息发送失败，请稍后重试')
    } finally {
      setBusy(false)
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        className="widget-launcher"
        style={{ '--widget-color': themeColor } as CSSProperties}
        onClick={() => setOpen(true)}
        aria-label={appearance?.launcherLabel || bootstrap?.name || query.get('label') || '客服'}
        disabled={!bootstrap}
      >
        <ChatIcon />
        <span className="online-dot" />
      </button>
    )
  }

  return (
    <section
      className={`widget-panel widget-${layoutMode}`}
      style={{ '--widget-color': themeColor } as CSSProperties}
    >
      <header className="widget-header">
        <WidgetAvatar url={appearance?.avatarURL} />
        <div className="heading">
          <strong>{bootstrap?.name ?? '客服'}</strong>
          <span><i />在线</span>
        </div>
        <button type="button" className="close-button" onClick={() => setOpen(false)} aria-label="关闭对话">
          <CloseIcon />
        </button>
      </header>

      <div className="messages" aria-live="polite">
        {messages.length === 0 ? (
          <>
            <div className="time-divider">{formatDividerTime(welcomeAt.current)}</div>
            <div className="message-row assistant">
              <WidgetAvatar url={appearance?.avatarURL} small />
              <div className="bubble">{appearance?.welcomeMessage ?? '你好，请问有什么想咨询的。'}</div>
            </div>
          </>
        ) : null}
        {messages.map((message, index) => (
          <div key={message.id}>
            {shouldShowTimeDivider(messages, index) ? (
              <div className="time-divider">{formatDividerTime(message.createdAt)}</div>
            ) : null}
            <div className={`message-row ${message.role}`}>
              {message.role === 'assistant' ? <WidgetAvatar url={appearance?.avatarURL} small /> : null}
              <div>
                <div className={`bubble ${message.status === 'failed' ? 'failed' : ''}`}>{message.text}</div>
                {message.role === 'assistant' && message.references?.length ? (
                  <div className="reference-card">
                    <strong>相关页面</strong>
                    {message.references.map((reference) => (
                      <a key={reference.url} href={reference.url} target="_blank" rel="noreferrer">
                        {reference.title}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
        {busy ? (
          <div className="message-row assistant">
            <WidgetAvatar url={appearance?.avatarURL} small />
            <div className="bubble typing"><span /><span /><span /></div>
          </div>
        ) : null}
        <div ref={endRef} />
      </div>

      {error ? <div className="widget-error" role="alert">{error}</div> : null}
      <form className="composer" onSubmit={submit}>
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault()
              event.currentTarget.form?.requestSubmit()
            }
          }}
          placeholder="输入你的问题…"
          maxLength={4000}
          rows={1}
          disabled={!session || busy}
          aria-label="输入你的问题"
        />
        <button type="submit" disabled={!input.trim() || !session || busy} aria-label="发送">
          <SendIcon />
        </button>
      </form>
      <footer>{appearance?.footerText ?? '由灵谐 AI 提供支持'}</footer>
    </section>
  )
}
