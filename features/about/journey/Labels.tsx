'use client'
import { useTranslation } from '@/shared/i18n/useTranslations'

const Labels = () => {
  const { t } = useTranslation()
  return (
    <>
      <span
        className='
          absolute
          left-[55%]
          bottom-[9%]
          -translate-x-1/2
          font-brand
          text-[12px]
          uppercase
          tracking-[0.45em]
          text-gold
        '
      >
        {t('about.timeline.labels.time')}
      </span>

      <span
        className='
          absolute
    left-[6%]
    top-1/2
    -translate-y-1/2
    -rotate-90
    whitespace-nowrap
    font-brand
    text-[12px]
    uppercase
    tracking-[0.45em]
    text-gold
    w-[80px]
        '
      >
        {t('about.timeline.labels.growth')}
      </span>
    </>
  )
}

export default Labels
