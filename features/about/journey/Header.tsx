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
      <div className='flex w-full flex-row gap-5 '>
        <p className='journey-header-subtitle w-1/2 font-body text-[15px]  md:text-lg leading-6 tracking-wider text-text-secondary'>
          {t('about.header.subtitle')}
        </p>

        <div className='flex w-1/2 items-center gap-4 border-t border-gold/20 pt-4 journey-header-hours'>
          <span className='font-brand text-3xl tracking-wide text-gold '>
            2500+
          </span>

          <span className='font-brand text-xs uppercase tracking-[0.25em] text-text-secondary '>
            {t('about.header.hours')}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
