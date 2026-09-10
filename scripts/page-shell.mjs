export const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export function pageShell(brand, english = false) {
  const docs = escapeHtml((process.env.VITE_SITE_DOCS_URL || brand.developerDomain).replace(/\/$/, ''))
  const home = english ? '/en/' : '/'
  const groups = [
    [english ? 'Guides' : '使用指南', [
      ['/guides/create-ai-avatar/', english ? 'Create an avatar (中文)' : '创建数字分身'],
      ['/guides/ai-avatar-for-creators/', english ? 'For creators (中文)' : '创作者指南'],
      ['/guides/ai-avatar-for-business/', english ? 'For business (中文)' : '企业使用指南'],
      ['/compare/ai-avatar-vs-chatbot/', english ? 'Avatar vs. chatbot (中文)' : '数字分身与聊天机器人'],
    ]],
    [english ? 'Product & resources' : '产品与资源', [
      ['/pricing/', english ? 'Costs (中文)' : '费用说明'],
      ['/security/', english ? 'Data & access (中文)' : '资料与接入权限'],
      ['/updates/', english ? 'Updates (中文)' : '更新记录'],
      [docs + '/', english ? 'Developer documentation' : '开放平台文档'],
    ]],
    [english ? 'About Lingxie' : '关于灵谐', [
      [home + 'about/', english ? 'Brand & company' : '品牌与公司'],
      ['mailto:info@lingxie.net', english ? 'Contact us' : '联系我们'],
      [home + 'terms/', english ? 'Terms of Service' : '服务条款'],
      [home + 'privacy/', english ? 'Privacy Policy' : '隐私政策'],
    ]],
  ]
  const logo = `<a class="brand" href="${home}" aria-label="${english ? 'Lingxie home' : '灵谐首页'}"><img src="/logo.png" width="38" height="38" alt=""><span>${english ? 'Lingxie' : '灵 谐'}</span></a>`
  return {
    header: `<a class="skip-link" href="#main">${english ? 'Skip to content' : '跳到正文'}</a><header class="site-header"><nav aria-label="${english ? 'Main navigation' : '主导航'}">${logo}<div class="header-links"><a href="${home}">${english ? 'Home' : '官网首页'}</a><a href="/guides/create-ai-avatar/">${english ? 'Guides (中文)' : '使用指南'}</a><a href="${docs}/">${english ? 'Open Platform' : '开放平台'} <span aria-hidden="true">↗</span></a></div></nav></header>`,
    footer: `<footer class="site-footer" id="site-footer"><div class="footer-main"><div class="footer-brand">${logo}<p>${english ? 'An extension of you.\nA new way to connect.' : '让你的知识与经验，\n连接更多可能。'}</p><a href="mailto:info@lingxie.net">info@lingxie.net</a></div><nav class="footer-groups" aria-label="${english ? 'Footer navigation' : '页脚导航'}">${groups.map(([title, links]) => `<section><h3>${title}</h3><ul>${links.map(([href, text]) => `<li><a href="${href}">${text}</a></li>`).join('')}</ul></section>`).join('')}</nav></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Lingxie · ${english ? 'All rights reserved.' : '灵谐'}</span><div><a href="https://beian.mps.gov.cn/#/query/webSearch?code=31010402336775"><img src="/beian-mps-logo.png" width="14" height="14" alt=""> 沪公网安备31010402336775号</a><a href="https://beian.miit.gov.cn/">沪ICP备2025137719号-2</a></div></div></footer>`,
  }
}
