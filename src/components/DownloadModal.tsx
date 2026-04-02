import { useEffect, useMemo, useState } from 'react'
import { SITE } from '../content/siteContent'
import { useLocale } from '../i18n/LocaleProvider'
import { detectClientPlatform, type ClientPlatform } from '../lib/clientPlatform'
import { fetchLatestRelease, parseGithubRepo, type GitHubLatestRelease } from '../lib/githubReleaseApi'
import { formatBytes, pickRecommendedAssets, type ReleaseAsset } from '../lib/releaseAssets'

type Props = { open: boolean; onClose: () => void }

function envDescription(c: ClientPlatform, ui: ReturnType<typeof useLocale>['t']['ui']): string {
  if (c.os === 'windows' && c.arch === 'arm64') return ui.envWindowsArm64
  if (c.os === 'windows') return ui.envWindowsX64
  if (c.os === 'mac' && c.arch === 'arm64') return ui.envMacApple
  if (c.os === 'mac') return ui.envMacIntel
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

export function DownloadModal({ open, onClose }: Props) {
  const { t, locale } = useLocale()
  const ui = t.ui
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)
  const [release, setRelease] = useState<GitHubLatestRelease | null>(null)

  const client = useMemo(() => detectClientPlatform(), [])
  const repoParts = useMemo(() => parseGithubRepo(SITE.githubRepo), [])

  const { primary, others } = useMemo(() => {
    if (!release?.assets?.length) return { primary: null, others: [] as ReleaseAsset[] }
    return pickRecommendedAssets(release.assets, client)
  }, [release, client])

  useEffect(() => {
    if (!open) return
    setErr(false)
    setLoading(true)
    setRelease(null)

    if (!repoParts) {
      setErr(true)
      setLoading(false)
      return
    }

    let cancelled = false
    fetchLatestRelease(repoParts.owner, repoParts.repo)
      .then((data) => {
        if (!cancelled) setRelease(data)
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
  }, [open, repoParts])

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
    release?.published_at &&
    new Date(release.published_at).toLocaleDateString(dateLoc, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })

  const title = replacePlaceholders(ui.downloadModalTitle, { name: SITE.name })
  const detectedLine = replacePlaceholders(ui.downloadDetected, {
    env: envDescription(client, ui),
  })
  const releasedLine =
    published && replacePlaceholders(ui.downloadReleased, { date: published })

  const showSmartScreen =
    client.os === 'windows' && primary != null && /\.exe$/i.test(primary.name)

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
          {release?.tag_name ? (
            <span className="ml-2 inline-flex align-middle rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-2 py-0.5 text-xs font-semibold text-[#F6C15E]">
              {release.tag_name}
            </span>
          ) : null}
        </h2>

        {releasedLine ? <p className="mt-2 text-sm text-zinc-500">{releasedLine}</p> : null}

        <p className="mt-4 flex gap-2 text-sm text-zinc-400">
          <span className="shrink-0 text-[#D4AF37]" aria-hidden>
            ℹ
          </span>
          <span>{detectedLine}</span>
        </p>

        <div className="mt-6">
          {loading ? (
            <p className="text-center text-sm text-zinc-500">{ui.downloadLoading}</p>
          ) : err ? (
            <p className="text-center text-sm text-zinc-400">{ui.downloadFetchError}</p>
          ) : primary == null ? (
            <p className="text-center text-sm text-zinc-400">{ui.downloadNoInstallers}</p>
          ) : (
            <>
              <a
                href={primary.browser_download_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-4 transition hover:border-[#D4AF37]/40 hover:bg-white/[0.07]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-black/40 text-[#D4AF37]">
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
                  <span className="mt-0.5 block truncate text-xs text-zinc-500">
                    {primary.name} · {formatBytes(primary.size, dateLoc)}
                  </span>
                </span>
                <span className="shrink-0 rounded-lg bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#EAB34D] px-4 py-2 text-sm font-semibold text-[#141109]">
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
                <li key={a.name}>
                  <a
                    className="flex items-center justify-between gap-3 text-sm text-[#EAB34D] hover:text-[#F6C15E]"
                    href={a.browser_download_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="min-w-0 truncate font-medium">{a.name}</span>
                    <span className="shrink-0 text-xs text-zinc-500">{formatBytes(a.size, dateLoc)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </details>
        ) : null}

        <p className="mt-6 text-center">
          <a
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#EAB34D] underline-offset-4 hover:text-[#F6C15E] hover:underline"
            href={SITE.downloadUrl}
            target="_blank"
            rel="noreferrer"
          >
            {ui.downloadViewReleases}
            <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </div>
  )
}
