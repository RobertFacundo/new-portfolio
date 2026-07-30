'use client'
import { useLanguageStore } from '@/shared/stores/language.store'

const Footer = () => {
  const { setLanguage } = useLanguageStore()
  return (
    <div>
      <button onClick={() => setLanguage('en')}>EN</button>

      <button onClick={() => setLanguage('es')}>ES</button>
    </div>
  )
}

export default Footer
