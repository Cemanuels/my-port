import { createContext } from 'react'
import en from '../locales/en.json'
import es from '../locales/es.json'
import pt from '../locales/pt.json'

export type Locale = 'en' | 'es' | 'pt'

export type Translation = typeof en

const translations: Record<Locale, Translation> = {
  en,
  es,
  pt,
}

export const supportedLocales: Locale[] = ['en', 'es', 'pt']

export function getBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en'
  const browserLang = navigator.language
  const primary = browserLang.split('-')[0].toLowerCase()
  if (primary === 'pt') return 'pt'
  if (primary === 'es') return 'es'
  if (primary === 'en') return 'en'
  return 'en'
}

export interface I18nContextValue {
  t: Translation
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const I18nContext = createContext<I18nContextValue | null>(null)

export { translations }
