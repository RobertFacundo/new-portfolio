'use client'
import { useTranslation } from '@/shared/i18n/useTranslations'

const Header = () => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col gap-5 px-5 pt-4 mb-0 pb-0'>
      <span className='luxury-title w-fit'>{t('about.header.eyebrow')}</span>
      <p className='font-body text-text-secondary mb-5 tracking-wider leading-6 text-lg w-[540px]'>
        {t('about.header.subtitle')}
      </p>
    </div>
  )
}

export default Header
