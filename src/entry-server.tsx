import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { LocaleProvider } from './i18n/LocaleProvider'
import type { Locale } from './i18n/types'

export function render(locale: Locale) {
  return renderToString(<StrictMode><LocaleProvider initialLocale={locale}><App /></LocaleProvider></StrictMode>)
}

export { messages } from './i18n/messages'
