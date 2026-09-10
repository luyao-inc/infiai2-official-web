import fs from 'node:fs'
import path from 'node:path'
import { pageShell } from './page-shell.mjs'

export function renderFactPages(root, dist, brand, dates) {
  const pages = JSON.parse(fs.readFileSync(path.join(root, 'src/content/factPages.json'), 'utf8'))
  const esc = v => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  const docsUrl = (process.env.VITE_SITE_DOCS_URL || brand.developerDomain).replace(/\/$/, '')
  const navigationHref = href => href.startsWith(brand.developerDomain + '/') ? docsUrl + href.slice(brand.developerDomain.length) : href
  const link = item => `<a href="${esc(navigationHref(item.href))}">${esc(item.label)}</a>`
  const shell = pageShell(brand)
  for (const page of pages) {
    if (!/^\/[a-z0-9/-]+\/$/.test(page.route) || page.route.includes('//') || dates[page.route]) throw new Error(`Invalid or duplicate fact route: ${page.route}`)
    if (!page.title || !page.description || !page.sections.length || !page.links.length) throw new Error(`Incomplete fact page: ${page.route}`)
    for (const item of page.links) if (!/^(?:https:\/\/|\/(?!\/))/.test(item.href)) throw new Error(`Unsafe link: ${page.route}`)
    dates[page.route] = page.modified
    const url = brand.canonicalDomain + page.route
    const graph = [
      { '@type': 'Organization', '@id': brand.canonicalDomain + '/#organization', name: brand.brandNameZh, legalName: brand.legalName, url: brand.canonicalDomain + '/' },
      { '@type': 'Article', '@id': url + '#article', headline: page.title, description: page.description, inLanguage: 'zh-CN', dateModified: page.modified, mainEntityOfPage: url, publisher: { '@id': brand.canonicalDomain + '/#organization' } },
      { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: brand.brandNameZh, item: brand.canonicalDomain + '/' }, { '@type': 'ListItem', position: 2, name: page.title, item: url } ] },
    ]
    const html = `<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(page.title)} | ${esc(brand.brandNameZh)}</title><meta name="description" content="${esc(page.description)}"><link rel="canonical" href="${url}"><meta name="robots" content="index,follow"><meta property="og:type" content="article"><meta property="og:title" content="${esc(page.title)}"><meta property="og:description" content="${esc(page.description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${brand.canonicalDomain}/logo.png"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${esc(page.title)}"><meta name="twitter:description" content="${esc(page.description)}"><meta name="twitter:image" content="${brand.canonicalDomain}/logo.png"><meta property="article:modified_time" content="${page.modified}"><script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}</script><link rel="stylesheet" href="/fact-pages.css"></head><body>
${shell.header}
<main id="main"><div class="intro"><a class="breadcrumb" href="/">灵谐 <span aria-hidden="true">/</span> 使用指南</a><p class="eyebrow">灵谐 · 产品与使用指南</p><h1>${esc(page.title)}</h1><p class="answer">${esc(page.description)}</p><p class="meta">内容更新：<time datetime="${page.modified}">${page.modified}</time> · 灵谐</p></div>
<div class="reading-layout"><nav class="contents" aria-label="本页目录"><p class="contents-label">本页内容</p>${page.sections.map((s,i)=>`<a href="#section-${i+1}">${esc(s.title)}</a>`).join('')}</nav>
<article>${page.sections.map((s,i)=>`<section id="section-${i+1}"><h2><span class="section-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span>${esc(s.title)}</h2>${(s.paragraphs.every(p=>/^\d+\. /.test(p)) ? `<ol>${s.paragraphs.map(p=>`<li>${esc(p.replace(/^\d+\. /,''))}</li>`).join('')}</ol>` : s.paragraphs.map(p=>`<p>${esc(p)}</p>`).join(''))}</section>`).join('')}
<section class="related"><h2>相关页面与依据</h2><ul>${page.links.map(item=>`<li>${link(item)}</li>`).join('')}</ul></section></article></div></main>
${shell.footer}</body></html>`
    fs.mkdirSync(path.join(dist, page.route), { recursive: true })
    fs.writeFileSync(path.join(dist, page.route, 'index.html'), html)
  }
  return pages
}
