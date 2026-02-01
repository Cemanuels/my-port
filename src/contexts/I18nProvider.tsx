import { useMemo, useState, useCallback, type ReactNode } from 'react'
import { I18nContext, translations, getBrowserLocale } from './I18nContext'
import type { Locale } from './I18nContext'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getBrowserLocale)

  const t = useMemo(() => translations[locale], [locale])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
  }, [])

  const value = useMemo(
    () => ({ t, locale, setLocale }),
    [t, locale, setLocale]
  )

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  )
}
