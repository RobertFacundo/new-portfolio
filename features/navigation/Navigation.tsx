'use client'
import { NAVIGATION_LINKS } from '@/shared/constants/navigation'
import { useTranslation } from '@/shared/i18n/useTranslations'
import { FiExternalLink } from 'react-icons/fi'

const Navigation = () => {
  const { t } = useTranslation()

  return (
    <nav className='hidden md:flex fixed top-0 left-0 w-full z-50 flex-row justify-between'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between '>
        <div>Logo</div>

        <div className='flex items-center gap-12 py-5 tracking-wider '>
          {NAVIGATION_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className='luxury-link mx-3 px-2'
            >
              {t.navigation[link.key]}
            </a>
          ))}
        </div>

        <a
          href='/cv.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='luxury-button '
        >
          {t.navigation.cv}
          <FiExternalLink className='ml-2 text-sm' />
        </a>
      </div>
    </nav>
  )
}

export default Navigation
