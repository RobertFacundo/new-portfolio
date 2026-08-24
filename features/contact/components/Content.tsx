'use client'
import { CONTACT_VALUES } from '@/shared/constants/contact'
import Values from './Values'
import { useTranslation } from '@/shared/i18n/useTranslations'

const Content = () => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-5 w-1/2 border-r border-gold/30 pr-10'>
      <span className='luxury-title w-fit'>{t('contact.eyebrow')}</span>

      <h1 className='mt-6 font-display text-5xl uppercase tracking-widest text-text-primary'>
        {t('contact.title')}
      </h1>

      <p className='mt-6 max-w-xl font-body text-lg leading-relaxed tracking-wide text-text-secondary'>
        {t('contact.paragraph')}
      </p>

      <div className='mt-12 flex flex-row gap-2 font-brand'>
        {CONTACT_VALUES.map(value => (
          <Values key={value.id} value={value} />
        ))}
      </div>
    </div>
  )
}

export default Content
