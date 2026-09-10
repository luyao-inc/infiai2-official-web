import fs from 'node:fs'
import path from 'node:path'
import { pageShell, escapeHtml as esc } from './page-shell.mjs'

export function renderAboutPages(root, dist, brand) {
  const docs = esc((process.env.VITE_SITE_DOCS_URL || brand.developerDomain).replace(/\/$/, ''))
  for (const en of [false, true]) {
    const route = en ? '/en/about/' : '/about/'
    const shell = pageShell(brand, en)
    const title = en ? 'About Lingxie' : '关于灵谐'
    const description = en ? 'Meet Lingxie, the interactive digital avatar platform for creators, experts and businesses.' : '了解灵谐数字分身互动平台，探索个人知识、创作者互动与企业接入，以及品牌和公司信息。'
    const cards = en ? [
      ['01 / IDENTITY', 'An extension of you', 'Bring your identity, communication style, knowledge and experience into your digital avatar.'],
      ['02 / CONNECTION', 'More ways to connect', 'Share your avatar with readers, fans and customers through familiar conversations.'],
      ['03 / POSSIBILITY', 'Built for your world', 'Explore personal creation and community interaction, or connect an avatar to your business.'],
    ] : [
      ['01 / IDENTITY', '像你，也懂你', '从身份与表达方式，到知识与经验，让数字分身成为你在数字世界中的延伸。'],
      ['02 / CONNECTION', '交流，不止于在线', '通过熟悉的对话方式，把你的内容和经验带给读者、粉丝与客户，建立更多连接。'],
      ['03 / POSSIBILITY', '让能力拥有更多可能', '从个人创作、社群互动到企业接入，找到适合你的数字分身使用方式。'],
    ]
    const body = `${shell.header}<main id="main" class="about-main"><a class="breadcrumb" href="${en ? '/en/' : '/'}">${en ? 'Home / About Lingxie' : '灵谐 / 关于我们'}</a>
    <section class="about-hero"><div><p class="eyebrow">ABOUT LINGXIE</p><h1>${en ? 'Your knowledge.<br><span class="gradient-text">More possibilities.</span>' : '另一个你，<br><span class="gradient-text">更多种可能。</span>'}</h1><p class="answer">${en ? 'Lingxie is an interactive digital avatar platform. Create an avatar that reflects you and connect your knowledge and experience with more people.' : '灵谐是一个数字分身互动平台。创建一个像你又懂你的数字分身，让你的知识与经验，连接更多的人。'}</p><div class="hero-actions"><a class="button button-primary" href="https://app.lingxie.net/">${en ? 'Experience Lingxie' : '体验灵谐'} <span aria-hidden="true">↗</span></a><a class="button" href="${en ? '/en/' : '/'}#platforms">${en ? 'Download the app' : '下载客户端'}</a></div></div><div class="avatar-orbit" aria-hidden="true"><div class="orb"><img src="/logo.png" width="90" height="90" alt=""></div><span class="orbit-label one">${en ? 'Your knowledge' : '你的知识'}</span><span class="orbit-label two">${en ? 'Your expression' : '你的表达'}</span><span class="orbit-label three">${en ? 'Your connections' : '你的连接'}</span></div></section>
    <section class="about-section"><div class="about-heading"><div><p class="eyebrow">OUR PRODUCT</p><h2>${en ? 'A digital avatar.<br>A personal connection.' : '以数字分身，<br>延伸每个人的能力。'}</h2></div><p>${en ? 'For creators, bloggers and experts, Lingxie brings knowledge, expression and interaction together in one place.' : '灵谐面向博主、创作者和各领域专家，将知识、表达与互动连接在一起。让个人积累的经验拥有新的呈现方式，也让更多人能够通过对话了解你。'}</p></div><div class="about-cards">${cards.map(([number, heading, text]) => `<article class="about-card"><span>${number}</span><h3>${heading}</h3><p>${text}</p></article>`).join('')}</div></section>
    <section class="about-section company-grid"><div><p class="eyebrow">BRAND & COMPANY</p><h2>${en ? 'Get to know Lingxie' : '认识灵谐'}</h2><p class="answer">${en ? 'Explore the product, learn how to get started, or contact us to discuss a collaboration.' : '从了解产品到开始使用，或与我们探讨合作，都可以从这里出发。'}</p><a class="button" href="mailto:info@lingxie.net">${en ? 'Contact us' : '联系灵谐'} <span aria-hidden="true">↗</span></a></div><dl><div><dt>${en ? 'Brand' : '品牌名称'}</dt><dd>${esc(brand.brandNameZh)} / ${esc(brand.brandNameEn)}</dd></div><div><dt>${en ? 'Product' : '产品定位'}</dt><dd>${esc(en ? brand.categoryEn : brand.categoryZh)}</dd></div><div><dt>${en ? 'Operator and developer' : '运营与研发主体'}</dt><dd>${esc(brand.legalName)}</dd></div><div><dt>${en ? 'Email' : '联系邮箱'}</dt><dd><a href="mailto:info@lingxie.net">info@lingxie.net</a></dd></div></dl></section>
    <section class="about-cta"><div><p class="eyebrow">TAKE THE NEXT STEP</p><h2>${en ? 'Make your first connection.' : '从你的第一个数字分身开始。'}</h2><p>${en ? 'Get started with a guide, or explore integration for your business.' : '了解创建步骤，或探索适合企业的接入方式。'}</p></div><div class="hero-actions"><a class="button button-primary" href="/guides/create-ai-avatar/">${en ? 'Read the guide (中文)' : '查看创建指南'} →</a><a class="button" href="${docs}/">${en ? 'Open Platform' : '开放平台'} ↗</a></div></section></main>${shell.footer}`
    const graph = { '@context': 'https://schema.org', '@type': 'AboutPage', name: title, description, url: brand.canonicalDomain + route, inLanguage: en ? 'en' : 'zh-CN', about: { '@type': 'Organization', '@id': brand.canonicalDomain + '/#organization', name: en ? brand.brandNameEn : brand.brandNameZh, legalName: brand.legalName, url: brand.canonicalDomain + '/' } }
    const html = `<!doctype html><html lang="${en ? 'en' : 'zh-CN'}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description" content="${description}"><meta name="robots" content="index,follow"><link rel="canonical" href="${brand.canonicalDomain}${route}"><link rel="alternate" hreflang="zh-CN" href="${brand.canonicalDomain}/about/"><link rel="alternate" hreflang="en" href="${brand.canonicalDomain}/en/about/"><link rel="alternate" hreflang="x-default" href="${brand.canonicalDomain}/about/"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:type" content="website"><meta property="og:url" content="${brand.canonicalDomain}${route}"><meta property="og:image" content="${brand.canonicalDomain}/logo.png"><meta name="twitter:card" content="summary"><link rel="icon" href="/favicon.svg"><link rel="stylesheet" href="/fact-pages.css"><script type="application/ld+json">${JSON.stringify(graph).replace(/</g, '\\u003c')}</script></head><body>${body}</body></html>`
    fs.mkdirSync(path.join(dist, route), { recursive: true })
    fs.writeFileSync(path.join(dist, route, 'index.html'), html)
  }
}
