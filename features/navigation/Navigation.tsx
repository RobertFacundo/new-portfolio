'use client'
import { NAVIGATION_LINKS } from '@/shared/constants/navigation'
import { useTranslation } from '@/shared/i18n/useTranslations'

const Navigation = () => {
  const { t } = useTranslation()

  return (
    <nav className='hidden md:block fixed top-0 left-0 w-full z-50'>
      {NAVIGATION_LINKS.map(link => (
        <a key={link.href} href={link.href}>
          {t.navigation[link.key]}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
