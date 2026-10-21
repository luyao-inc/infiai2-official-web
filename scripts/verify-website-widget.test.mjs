import test from 'node:test'
import assert from 'node:assert/strict'
import { validateWidgetConfig, validateWidgetHtml } from './verify-website-widget.mjs'

const env = { VITE_WEBSITE_WIDGET_ID: 'ww_fixture', VITE_WEBSITE_WIDGET_API_BASE: 'https://chat.example.com' }
const config = validateWidgetConfig(env)
const html = '<script defer src="/widget/v1/loader.js" data-widget-id="ww_fixture" data-api-base="https://chat.example.com"></script>'

test('reject absent, empty or unresolved Widget configuration before building', () => {
  for (const value of [undefined, '', '%VITE_WEBSITE_WIDGET_ID%', 'bad"id']) {
    assert.throws(() => validateWidgetConfig({ ...env, VITE_WEBSITE_WIDGET_ID: value }))
  }
  for (const value of [undefined, '', '%VITE_WEBSITE_WIDGET_API_BASE%', '/api', 'javascript:alert(1)', 'https://user:password@chat.example.com', 'https://chat.example.com?token=value']) {
    assert.throws(() => validateWidgetConfig({ ...env, VITE_WEBSITE_WIDGET_API_BASE: value }))
  }
})

test('accept valid local and deployed endpoints', () => {
  assert.doesNotThrow(() => validateWidgetConfig(env))
  assert.doesNotThrow(() => validateWidgetConfig({ ...env, VITE_WEBSITE_WIDGET_API_BASE: 'http://127.0.0.1:10008' }))
  assert.doesNotThrow(() => validateWidgetHtml(html, config))
})

test('reject the production regression and missing, duplicate or misconfigured loaders', () => {
  for (const value of ['', html + html, html.replace('ww_fixture', '%VITE_WEBSITE_WIDGET_ID%'), html.replace('ww_fixture', 'ww_other'), html.replace('https://chat.example.com', 'https://wrong.example.com')]) {
    assert.throws(() => validateWidgetHtml(value, config))
  }
})
