/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useMemo, useState } from 'react'
import { SITE } from '../content/siteContent'
import { useLocale } from '../i18n/LocaleProvider'
import { fetchPublicDownloadVersions, pickDownloadVersion, type DownloadVersion } from '../lib/appVersionApi'
import {
  detectClientPlatform,
  detectClientPlatformHighEntropy,
  isWeChatBrowser,
  type ClientOS,
  type ClientPlatform,
} from '../lib/clientPlatform'
import { formatBytes } from '../lib/releaseAssets'

type Props = { open: boolean; onClose: () => void; preferredOs?: ClientOS }

function envDescription(c: ClientPlatform, ui: ReturnType<typeof useLocale>['t']['ui']): string {
  if (c.os === 'windows' && c.arch === 'arm64') return ui.envWindowsArm64
  if (c.os === 'windows') return ui.envWindowsX64
  if (c.os === 'mac' && c.arch === 'arm64') return ui.envMacApple
  if (c.os === 'mac' && c.arch === 'x64') return ui.envMacIntel
  if (c.os === 'mac') return 'MacOS'
  if (c.os === 'ios') return ui.envIOS
  if (c.os === 'android') return ui.envAndroid
  if (c.os === 'linux') return ui.envLinux
  return ui.envUnknown
}

function replacePlaceholders(s: string, map: Record<string, string>): string {
  let out = s
  for (const [k, v] of Object.entries(map)) {
    out = out.replaceAll(`{${k}}`, v)
  }
  return out
}

function packageLine(item: DownloadVersion, locale: string) {
  return item.packageSize > 0 ? `${item.filename} · ${formatBytes(item.packageSize, locale)}` : item.filename
}

async function copyText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      // Fall through to the legacy copy path used by some embedded browsers.
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const copied = document.execCommand('copy')
  textarea.remove()
  if (!copied) throw new Error('copy failed')
}

export function DownloadModal({ open, onClose, preferredOs }: Props) {
  const { t, locale } = useLocale()
  const ui = t.ui
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)
  const [versions, setVersions] = useState<DownloadVersion[]>([])
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle')

  const [detected, setDetected] = useState<ClientPlatform>(() => detectClientPlatform())
  const client = useMemo(
    (): ClientPlatform =>
      preferredOs ? { os: preferredOs, arch: preferredOs === 'android' ? 'arm64' : detected.arch } : detected,
    [detected, preferredOs],
  )
  const isIos = client.os === 'ios'
  const isIosWeChat = isIos && isWeChatBrowser()

  const { primary, others } = useMemo(() => {
    if (!versions.length) return { primary: null, others: [] as DownloadVersion[] }
    return pickDownloadVersion(versions, client.os, client.arch)
  }, [versions, client])

  useEffect(() => {
    let cancelled = false
    detectClientPlatformHighEntropy().then((platform) => {
      if (!cancelled) setDetected(platform)
    })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!open) return
    setErr(false)
    setLoading(true)
    setVersions([])

    let cancelled = false
    fetchPublicDownloadVersions(SITE.chatApiUrl)
      .then((data) => {
        if (!cancelled) setVersions(data)
      })
      .catch(() => {
        if (!cancelled) setErr(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [open])

  useEffect(() => {
    if (open) setCopyStatus('idle')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const dateLoc = locale === 'zh' ? 'zh-CN' : 'en-US'
  const published =
    primary?.publishedAt &&
    new Date(primary.publishedAt).toLocaleDateString(dateLoc, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })

  const title = replacePlaceholders(ui.downloadModalTitle, { name: t.hero.headline })
  const detectedLine = replacePlaceholders(ui.downloadDetected, {
    env: envDescription(client, ui),
  })
  const releasedLine = published && replacePlaceholders(ui.downloadReleased, { date: published })

  const showSmartScreen = client.os === 'windows' && primary != null && /\.exe$/i.test(primary.filename)
  const iosAppStoreURL = isIos && primary?.url ? primary.url : SITE.iosAppStoreUrl

  const copyIosLink = async () => {
    try {
      await copyText(iosAppStoreURL)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('failed')
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label={ui.downloadClose}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ec-download-title"
        className="relative z-[101] w-full max-w-lg rounded-2xl border border-white/12 bg-[#0c0c10] p-6 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)] sm:p-7"
      >
        <button
          type="button"
          className="absolute right-4 top-4 rounded-lg px-2 py-1 text-lg leading-none text-zinc-500 transition hover:bg-white/10 hover:text-zinc-200"
          onClick={onClose}
          aria-label={ui.downloadClose}
        >
          ×
        </button>

        <h2 id="ec-download-title" className="pr-10 text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
          {title}
          {primary?.versionName ? (
            <span className="ml-2 inline-flex align-middle rounded-full border border-blue-500/40 bg-blue-500/15 px-2 py-0.5 text-xs font-semibold text-blue-300">
              {primary.versionName}
            </span>
          ) : null}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">{ui.downloadModalSub}</p>

        {releasedLine ? <p className="mt-2 text-sm text-zinc-500">{releasedLine}</p> : null}

        <p className="mt-4 flex gap-2 text-sm text-zinc-400">
          <span className="shrink-0 text-blue-300" aria-hidden>
            ℹ
          </span>
          <span>{detectedLine}</span>
        </p>

        <div className="mt-6">
          {isIos ? (
            <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.08] p-5 text-center">
              <p className="text-lg font-semibold text-cyan-100">
                {isIosWeChat ? ui.iosWechatTitle : ui.iosDownloadTitle}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cyan-100/70">
                {isIosWeChat ? ui.iosWechatBody : ui.iosDownloadBody}
              </p>
              {isIosWeChat ? (
                <>
                  <ol className="mt-5 space-y-2 text-left text-sm text-cyan-50/85">
                    {ui.iosWechatSteps.map((step, index) => (
                      <li key={step} className="flex gap-3">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-200/15 text-xs font-bold text-cyan-100">
                          {index + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    <a
                      href={iosAppStoreURL}
                      className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-[#07111f] transition hover:bg-cyan-100"
                    >
                      {ui.iosWechatTryOpen}
                    </a>
                    <button
                      type="button"
                      className="inline-flex min-h-11 items-center justify-center rounded-xl border border-cyan-100/25 bg-cyan-100/[0.08] px-4 py-2.5 text-sm font-bold text-cyan-50 transition hover:bg-cyan-100/[0.14]"
                      onClick={copyIosLink}
                    >
                      {copyStatus === 'copied' ? ui.iosWechatCopied : ui.iosWechatCopy}
                    </button>
                  </div>
                  {copyStatus === 'failed' ? (
                    <p role="alert" className="mt-3 text-xs text-amber-200">
                      {ui.iosWechatCopyFailed}
                    </p>
                  ) : null}
                  <a
                    href={iosAppStoreURL}
                    className="mt-3 block break-all text-xs leading-5 text-cyan-200/65 underline decoration-cyan-200/30 underline-offset-2"
                  >
                    {iosAppStoreURL}
                  </a>
                </>
              ) : (
                <a
                  href={iosAppStoreURL}
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#07111f] transition hover:bg-cyan-100"
                >
                  {ui.download}
                </a>
              )}
            </div>
          ) : loading ? (
            <p className="text-center text-sm text-zinc-500">{ui.downloadLoading}</p>
          ) : err ? (
            <p className="text-center text-sm text-zinc-400">{ui.downloadFetchError}</p>
          ) : primary == null ? (
            <p className="text-center text-sm text-zinc-400">{ui.downloadNoInstallers}</p>
          ) : (
            <>
              <a
                href={primary.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-4 transition hover:border-blue-500/40 hover:bg-white/[0.07]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-black/40 text-blue-300">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v11"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block font-semibold text-zinc-100">{envDescription(client, ui)}</span>
                  <span className="mt-0.5 block truncate text-xs text-zinc-500">{packageLine(primary, dateLoc)}</span>
                </span>
                <span className="shrink-0 rounded-lg bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] px-4 py-2 text-sm font-semibold text-white">
                  {ui.download}
                </span>
              </a>
              {showSmartScreen ? (
                <p className="mt-3 text-xs leading-relaxed text-zinc-600">{ui.downloadSmartScreenHint}</p>
              ) : null}
            </>
          )}
        </div>

        {!loading && !err && others.length > 0 ? (
          <details className="mt-5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3">
            <summary className="cursor-pointer text-sm font-medium text-zinc-300">{ui.downloadOtherPlatforms}</summary>
            <ul className="mt-3 space-y-2 border-t border-white/[0.06] pt-3">
              {others.map((a) => (
                <li key={a.id}>
                  <a
                    className="flex items-center justify-between gap-3 text-sm text-zinc-400 transition-colors hover:text-blue-300"
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="min-w-0 truncate font-medium">
                      {a.title} {a.versionName}
                    </span>
                    <span className="shrink-0 text-xs text-zinc-500">
                      {a.packageSize > 0 ? formatBytes(a.packageSize, dateLoc) : a.arch}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </details>
        ) : null}

        <p className="mt-6 text-center">
          <a
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 underline-offset-4 transition-colors hover:text-blue-300 hover:underline"
            href="#platforms"
            onClick={onClose}
          >
            {ui.downloadViewReleases}
          </a>
        </p>
      </div>
    </div>
  )
}
