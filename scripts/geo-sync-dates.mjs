/**
 * GEO：构建前刷新机器可读日期（sitemap lastmod、RSS、humans）
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

function formatDateOnlyAsiaShanghai(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
}

/** RFC 822 style with fixed +0800 (Asia/Shanghai has no DST since 1991). */
function formatRfc822AsiaShanghai(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Shanghai',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(now)

  const pick = (type) => parts.find((p) => p.type === type)?.value ?? ''

  const weekday = pick('weekday')
  const month = pick('month')
  const day = pick('day').padStart(2, '0')
  const year = pick('year')
  let hour = pick('hour').padStart(2, '0')
  let minute = pick('minute').padStart(2, '0')
  let second = pick('second').padStart(2, '0')
  if (hour.length === 1) hour = `0${hour}`

  return `${weekday}, ${day} ${month} ${year} ${hour}:${minute}:${second} +0800`
}

function main() {
  const dateOnly = formatDateOnlyAsiaShanghai()
  const rfc = formatRfc822AsiaShanghai()

  const sitemapPath = path.join(root, 'public', 'sitemap.xml')
  let sitemap = fs.readFileSync(sitemapPath, 'utf8')
  sitemap = sitemap.replace(/<lastmod>[\d-]+<\/lastmod>/g, `<lastmod>${dateOnly}</lastmod>`)
  fs.writeFileSync(sitemapPath, sitemap)

  const feedPath = path.join(root, 'public', 'feed.xml')
  let feed = fs.readFileSync(feedPath, 'utf8')
  feed = feed.replace(/<lastBuildDate>[^<]+<\/lastBuildDate>/, `<lastBuildDate>${rfc}</lastBuildDate>`)
  feed = feed.replace(/<pubDate>[^<]+<\/pubDate>/, `<pubDate>${rfc}</pubDate>`)
  fs.writeFileSync(feedPath, feed)

  const humansPath = path.join(root, 'public', 'humans.txt')
  let humans = fs.readFileSync(humansPath, 'utf8')
  humans = humans.replace(/^Last updated:.*$/m, `Last updated: ${dateOnly} (Asia/Shanghai)`)
  fs.writeFileSync(humansPath, humans)

  console.log(`[geo-sync-dates] sitemap lastmod=${dateOnly}, rss=${rfc}`)
}

main()
