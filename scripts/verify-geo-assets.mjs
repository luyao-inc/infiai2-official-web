/**
 * 构建后校验：GEO 相关静态文件必须出现在 dist（避免 emptyOutDir / 配置回归导致线上 sitemap 等缺失）。
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')

const required = [
  'sitemap.xml',
  'robots.txt',
  'feed.xml',
  'llms.txt',
  'humans.txt',
  '.well-known/ai.txt',
]

function main() {
  for (const rel of required) {
    const p = path.join(dist, rel)
    if (!fs.existsSync(p)) {
      console.error(`[verify-geo-assets] missing: dist/${rel}`)
      process.exit(1)
    }
  }

  const sitemapPath = path.join(dist, 'sitemap.xml')
  const sitemap = fs.readFileSync(sitemapPath, 'utf8')
  if (!sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
    console.error('[verify-geo-assets] sitemap.xml missing expected sitemap namespace')
    process.exit(1)
  }
  if (!sitemap.includes('<urlset') || !sitemap.includes('</urlset>')) {
    console.error('[verify-geo-assets] sitemap.xml does not contain urlset root')
    process.exit(1)
  }

  console.log('[verify-geo-assets] ok')
}

main()
