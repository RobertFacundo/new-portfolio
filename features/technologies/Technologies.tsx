'use client'
import { useTranslation } from '@/shared/i18n/useTranslations'
import TechSection from './components/TechSection'

const Technologies = () => {
  const { t } = useTranslation()
  return (
    <section
      id='technologies'
      className='border-t border-b border-gold/10 py-10'
    >
      <h1
        className='
         luxury-title
         w-fit
         ml-5
         mb-2
        '
      >
        {t('techStack.title')}
      </h1>
      <TechSection />
    </section>
  )
}

export default Technologies
