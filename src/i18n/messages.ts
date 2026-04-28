import type { Locale } from './types'
import type { Messages } from './types'
import { zh } from './zh'
import { en } from './en'

export const messages: Record<Locale, Messages> = {
  zh,
  en,
}

export const defaultLocale: Locale = 'zh'

export const STORAGE_KEY = 'infiai2-locale'
