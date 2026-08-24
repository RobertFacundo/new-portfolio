'use client'
import { CONTACT_VALUES } from '@/shared/constants/contact'
import Values from './Values'
import { useTranslation } from '@/shared/i18n/useTranslations'
import { useRef } from 'react'
import { useLanguageTransition } from '@/shared/hooks/useLanguageTransition'
import { useContactContentAnimation } from '../animations/useContactContentAnimation'

const Content = () => {
  const { t } = useTranslation()

  const languageRefs = useRef<(HTMLElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  useLanguageTransition({ refs: languageRefs })
  useContactContentAnimation(containerRef)

  return (
    <div
      ref={containerRef}
      className='contact-container flex flex-col gap-5 w-full md:w-1/2 md:border-r border-gold/30 pr-10'
    >
      <span
        ref={el => {
          languageRefs.current[0] = el
        }}
        className='luxury-title w-fit '
      >
        {t('contact.eyebrow')}
      </span>

      <h1
        ref={el => {
          languageRefs.current[1] = el
        }}
        className='mt-6 font-display text-5xl uppercase tracking-widest text-text-primary text-center'
      >
        {t('contact.title')}
      </h1>

      <p
        ref={el => {
          languageRefs.current[2] = el
        }}
        className='mt-6 max-w-xl font-body text-lg leading-relaxed tracking-wide text-text-secondary text-center'
      >
        {t('contact.paragraph')}
      </p>

      <div className='mt-12 flex flex-col md:flex-row gap-2 font-brand mb-5'>
        {CONTACT_VALUES.map(value => (
          <Values key={value.id} value={value} />
        ))}
      </div>
    </div>
  )
}

export default Content
