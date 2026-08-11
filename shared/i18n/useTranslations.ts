'use client'
import { translations } from '.'
import { useLanguageStore } from '../stores/language.store'

export const useTranslation = () => {
  const language = useLanguageStore(state => state.language)

  const t = (key: string) => {
    return key.split('.').reduce((value, part) => {
      return value?.[part]
    }, translations[language] as any)
  }

  return { t }
}
