// Compatibility command: validate only. Legacy sitemap ping endpoints do not prove indexing.
const origin = (process.env.GEO_SITE_ORIGIN ?? 'https://lingxie.net').replace(/\/$/, '')
if (origin !== 'https://lingxie.net') throw new Error('GEO_SITE_ORIGIN must be the formal website origin')
const response = await fetch(`${origin}/sitemap.xml`, { redirect: 'error', signal: AbortSignal.timeout(15000) })
if (!response.ok || !(await response.text()).includes('<urlset')) throw new Error('Published sitemap is unavailable or invalid')
console.log('Published sitemap is readable. No indexing notification was sent. Use the scoped post-deploy IndexNow workflow.')
