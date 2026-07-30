'use client'
import { translations } from '.'
import { useLanguageStore } from '../stores/language.store'

export const useTranslation = () => {
  const language = useLanguageStore(state => state.language)

  return {
    t: translations[language]
  }
}
