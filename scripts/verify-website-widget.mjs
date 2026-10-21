import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadEnv } from 'vite'

const root = fileURLToPath(new URL('../', import.meta.url))

export function validateWidgetConfig(env) {
  const id = env.VITE_WEBSITE_WIDGET_ID ?? ''
  const base = env.VITE_WEBSITE_WIDGET_API_BASE ?? ''
  assert(/^ww_[A-Za-z0-9_-]+$/.test(id), 'VITE_WEBSITE_WIDGET_ID is required and must be a valid public Widget ID')
  let url
  try { url = new URL(base) } catch { throw new Error('VITE_WEBSITE_WIDGET_API_BASE must be an absolute HTTP(S) URL') }
  assert(['http:', 'https:'].includes(url.protocol) && !url.username && !url.password && !url.search && !url.hash,
    'VITE_WEBSITE_WIDGET_API_BASE must be an HTTP(S) URL without credentials, query or fragment')
  return { id, base }
}

export function validateWidgetHtml(html, config) {
  assert(!/%VITE_WEBSITE_WIDGET_[A-Z_]+%/.test(html), 'Unresolved Widget placeholder in built HTML')
  const scripts = html.match(/<script\b[^>]*\bsrc="\/widget\/v1\/loader\.js"[^>]*>/g) ?? []
  assert.equal(scripts.length, 1, 'Built homepage must contain exactly one Widget loader')
  assert(scripts[0].includes(`data-widget-id="${config.id}"`), 'Built Widget ID does not match build configuration')
  assert(scripts[0].includes(`data-api-base="${config.base.replaceAll('&', '&amp;')}"`), 'Built Widget API base does not match build configuration')
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const config = validateWidgetConfig(loadEnv('production', root, 'VITE_'))
  if (!process.argv.includes('--config')) {
    validateWidgetHtml(fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8'), config)
    for (const file of ['widget/v1/loader.js', 'widget/embed/index.html']) {
      assert(fs.statSync(path.join(root, 'dist', file)).size > 0, `Missing Widget asset: ${file}`)
    }
  }
  console.log(`[verify-website-widget] ${process.argv.includes('--config') ? 'build configuration' : 'built homepage and assets'} passed`)
}
