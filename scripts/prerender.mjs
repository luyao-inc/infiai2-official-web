import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderFactPages } from './render-fact-pages.mjs'
import { renderAboutPages } from './render-about-pages.mjs'
import { render, messages } from '../dist-ssr/entry-server.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const brand = JSON.parse(fs.readFileSync(path.join(root, 'public/brand-facts.json'), 'utf8'))
const dates = JSON.parse(fs.readFileSync(path.join(root, 'src/content/pageDates.json'), 'utf8'))
const factPages = renderFactPages(root, dist, brand, dates)
const escape = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const json = value => JSON.stringify(value).replace(/</g, '\\u003c')
const setMeta = (html, name, value) => html.replace(new RegExp(`(<meta\\s+(?:name|property)="${name}"\\s+content=")[^"]*(")`, 'g'), (_, before, after) => before + escape(value) + after)

renderAboutPages(root, dist, brand)

for (const [url, date] of Object.entries(dates)) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) ||
      new Date(date).toISOString().slice(0, 10) !== date || date > new Date().toISOString().slice(0, 10)) throw new Error(`Invalid content date: ${url}`)
  if (!fs.existsSync(path.join(dist, url, 'index.html'))) throw new Error(`Missing page: ${url}`)
}

for (const [locale, route] of [['zh', '/'], ['en', '/en/']]) {
  const file = path.join(dist, route, 'index.html')
  const t = messages[locale]
  let html = fs.readFileSync(file, 'utf8')
  html = html.replace('<div id="root"></div>', () => `<div id="root">${render(locale)}</div>`)
  html = html.replace(/<title>.*?<\/title>/s, () => `<title>${escape(t.meta.title)}</title>`)
  for (const name of ['description', 'og:description', 'twitter:description']) html = setMeta(html, name, t.meta.description)
  for (const name of ['og:title', 'twitter:title']) html = setMeta(html, name, t.meta.title)
  html = setMeta(html, 'article:modified_time', dates[route])
  html = html.replace(/(<script\b[^>]*id="ld-faq"[^>]*>)[\s\S]*?(<\/script>)/, (_, a, b) => a + json({
    '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${brand.canonicalDomain}${route}#faq`,
    url: brand.canonicalDomain + route,
    mainEntity: t.faqs.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  }) + b)
  html = html.replace(/"dateModified"\s*:\s*"[^"]+"/, () => `"dateModified": "${dates[route]}"`)
  const noJsNav = locale === 'zh' ? '官网导航' : 'Site navigation'
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, () => `<noscript>
    <style>
      #root > div, .lx-scroll-stage { height:auto!important; overflow:visible!important; }
      .lx-story-section { height:auto!important; min-height:0!important; overflow:visible!important; padding:3rem 0; }
      .lx-faq-list { display:none!important; }
      @layer base { .lx-story-faq .lx-faq-answer[hidden] { display:block!important; margin-top:1rem; } }
      .lx-faq-layout { display:block!important; }
      .lx-case-track { animation:none!important; flex-wrap:wrap; width:auto!important; }
      .lx-case-card[aria-hidden="true"] { display:none!important; }
      .ssg-navigation { padding:1rem; background:#03050b; color:white; }
      .ssg-navigation a { display:inline-block; padding:.5rem; text-decoration:underline; }
      #root header button, #root header [role="group"], .lx-story-hero button { display:none!important; }
    </style>
    <nav class="ssg-navigation" aria-label="${noJsNav}">${t.nav.map(item => `<a href="${escape(item.href)}">${escape(item.label)}</a>`).join('')}<a href="/">中文</a><a href="/en/">English</a></nav>
  </noscript>`)
  fs.writeFileSync(file, html)
}

const urls = Object.entries(dates).map(([route, modified]) => {
  const zh = route.replace(/^\/en\//, '/')
  const en = '/en' + zh
  if (!dates[en] || !dates[zh]) return `<url><loc>${brand.canonicalDomain}${route}</loc><lastmod>${modified}</lastmod></url>`
  return `<url><loc>${brand.canonicalDomain}${route}</loc><lastmod>${modified}</lastmod><xhtml:link rel="alternate" hreflang="zh-CN" href="${brand.canonicalDomain}${zh}"/><xhtml:link rel="alternate" hreflang="en" href="${brand.canonicalDomain}${en}"/></url>`
})
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`)
fs.writeFileSync(path.join(dist, 'llms.txt'), `# ${brand.brandNameZh} / ${brand.brandNameEn}\n\n${messages.zh.meta.description}\n\n${brand.developerRelationshipZh}\n\n- 官网: ${brand.canonicalDomain}/\n- English: ${brand.canonicalDomain}/en/\n- 品牌事实: ${brand.canonicalDomain}/about/\n- 开放平台与帮助中心: ${brand.developerDomain}/\n- 产品入口: https://app.lingxie.net/\n${factPages.map(page => `- ${page.title}: ${brand.canonicalDomain}${page.route}`).join('\n')}\n- 完整摘要: ${brand.canonicalDomain}/llms-full.txt\n`)
fs.writeFileSync(path.join(dist, 'llms-full.txt'), `# ${brand.brandNameZh} / ${brand.brandNameEn}\n\n${brand.developerRelationshipZh}\n\n${Object.entries(messages).map(([locale, t]) => `## ${locale}\n\n${t.meta.description}\n\n${t.faqs.map(item => `### ${item.q}\n\n${item.a}`).join('\n\n')}`).join('\n\n')}\n`)
const published = new Date(dates['/about/'] + 'T00:00:00Z').toUTCString()
fs.writeFileSync(path.join(dist, 'feed.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>灵谐官网内容更新</title><link>${brand.canonicalDomain}/</link><description>灵谐官网公开内容修订记录</description><language>zh-cn</language><lastBuildDate>${published}</lastBuildDate><item><title>官网品牌事实与开放平台关系</title><link>${brand.canonicalDomain}/about/</link><guid isPermaLink="false">lingxie-brand-facts-${dates['/about/']}</guid><pubDate>${published}</pubDate><description>${escape(brand.developerRelationshipZh)}</description></item></channel></rss>\n`)
console.log(`[SSG] Rendered Chinese and English homepages; ${urls.length} canonical content pages in sitemap. Dates are explicit content revisions.`)
