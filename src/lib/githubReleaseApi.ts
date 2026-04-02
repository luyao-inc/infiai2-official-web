import type { ReleaseAsset } from './releaseAssets'

export type GitHubLatestRelease = {
  tag_name: string
  name: string
  published_at: string
  assets: ReleaseAsset[]
}

export async function fetchLatestRelease(owner: string, repo: string): Promise<GitHubLatestRelease> {
  const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/releases/latest`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`GitHub API: ${String(res.status)}`)
  return res.json() as Promise<GitHubLatestRelease>
}

export function parseGithubRepo(full: string): { owner: string; repo: string } | null {
  const parts = full.split('/').filter(Boolean)
  if (parts.length !== 2 || parts.some((p) => p.includes(' '))) return null
  return { owner: parts[0], repo: parts[1] }
}
