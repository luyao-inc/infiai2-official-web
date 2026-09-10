/**
 * 构建后校验：GEO 相关静态文件必须出现在 dist（避免 emptyOutDir / 配置回归导致线上 sitemap 等缺失）。
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import assert from 'node:assert/strict'

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
  const dates = JSON.parse(fs.readFileSync(path.join(root, 'src/content/pageDates.json'), 'utf8'))
  for (const page of JSON.parse(fs.readFileSync(path.join(root, 'src/content/factPages.json'), 'utf8'))) dates[page.route] = page.modified
  const descriptions = new Set()
  const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1])
  assert.equal(locs.length, Object.keys(dates).length)
  for (const route of Object.keys(dates)) {
    const url = 'https://lingxie.net' + route
    assert(locs.includes(url), `Sitemap missing ${url}`)
    const html = fs.readFileSync(path.join(dist, route, 'index.html'), 'utf8')
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route}: expected one H1`)
    const head = html.split('</head>')[0]
    const description = head.match(/<meta\s+name="description"\s+content="([^"]+)"/)[1]
    assert(!descriptions.has(description), `${route}: duplicate description`)
    descriptions.add(description)
    assert(!/<meta[^>]+name="robots"[^>]+noindex/i.test(head), `${route}: noindex`)
    assert.equal((head.match(/rel="canonical"/g) ?? []).length, 1)
    assert(head.includes(`rel="canonical" href="${url}"`))
    for (const match of head.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(match[1])
    if (route === '/' || route === '/en/') {
      assert(!html.includes('<div id="root"></div>'), `${route}: empty shell`)
      assert(html.includes('hydrateRoot') || html.includes('/assets/'), `${route}: missing client entry`)
      const faq = JSON.parse(html.match(/<script\b[^>]*id="ld-faq"[^>]*>([\s\S]*?)<\/script>/)[1])
      const body = html.split('</head>')[1]
      const escape = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;')
      for (const item of faq.mainEntity) assert(body.includes(escape(item.acceptedAnswer.text)), `${route}: FAQ missing from HTML`)
    }
  }
  for (const file of ['404.html', 'widget/v1/loader.js', 'widget/embed/index.html']) assert(fs.existsSync(path.join(dist, file)), `Missing ${file}`)
  assert(!fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8').includes('www.lingxie.net'))
  console.log(`[SSG verification] ${locs.length} content routes and Widget entrypoints passed`)
}

main()
