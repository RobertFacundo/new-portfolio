'use client'
import { useTranslation } from '@/shared/i18n/useTranslations'
import { useJourneyHeaderAnimation } from '../animations/useJourneyHeaderAnimation'
import { useRef } from 'react'

const Header = () => {
  const { t } = useTranslation()
  const headerRef = useRef<HTMLDivElement>(null)

  useJourneyHeaderAnimation(headerRef)
  return (
    <div ref={headerRef} className='flex flex-col gap-5 px-5 pt-4 mb-0 pb-0'>
      <span className='journey-header-eyebrow luxury-title w-fit'>
        {t('about.header.eyebrow')}
      </span>
      <p className='journey-header-subtitle font-body text-text-secondary mb-5 tracking-wider leading-6 text-lg w-[540px]'>
        {t('about.header.subtitle')}
      </p>
    </div>
  )
}

export default Header
