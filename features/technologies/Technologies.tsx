'use client'
import { useTranslation } from '@/shared/i18n/useTranslations'
import TechSection from './components/TechSection'
import { useRef } from 'react'
import { useTechStackAnimations } from './animations/useTechStackAnimations'

const Technologies = () => {
  const { t } = useTranslation()

  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const columnsRef = useRef<HTMLDivElement | null>(null)

  useTechStackAnimations({ titleRef, columnsRef })
  return (
    <section id='technologies' className='border-b border-gold/10 py-10'>
      <h1
        ref={titleRef}
        className='
         luxury-title
         w-fit
         ml-5
         mb-2
        '
      >
        {t('techStack.title')}
      </h1>
      <TechSection ref={columnsRef} />
    </section>
  )
}

export default Technologies
