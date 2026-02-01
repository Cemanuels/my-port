import { useI18n } from '../contexts/useI18n'
import type { Locale } from '../contexts/I18nContext'

const localeOptions: { value: Locale; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
  { value: 'pt', label: 'PT' },
]

export function LanguageSwitcher() {
  const { t, locale, setLocale } = useI18n()

  return (
    <div className="language-switcher">
      <select
        id="language-select"
        className="language-switcher-select"
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        aria-label={t.common.selectLanguage}
        title={t.common.selectLanguage}
      >
        {localeOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}
