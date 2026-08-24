import type { ContactValue as ContactValueData } from '@/shared/constants/contact'
import { useTranslation } from '@/shared/i18n/useTranslations'
import { useRef } from 'react'
import { useLanguageTransition } from '@/shared/hooks/useLanguageTransition'

interface Props {
  value: ContactValueData
}

const Values = ({ value }: Props) => {
  const { t } = useTranslation()
  const Icon = value.icon

  const languageRefs = useRef<(HTMLElement | null)[]>([])

  useLanguageTransition({ refs: languageRefs })

  return (
    <article className=' contact-value border-r border-gold/20 px-3 py-6 last:border-r-0'>
      <div className='flex items-center gap-4'>
        <Icon size={30} className='text-gold' />

        <h3
          ref={el => {
            languageRefs.current[0] = el
          }}
          className='font-brand text-base uppercase tracking-widest text-gold'
        >
          {t(`contact.values.${value.id}.title`)}
        </h3>
      </div>

      <p
        ref={el => {
          languageRefs.current[1] = el
        }}
        className='mt-3 pl-9 font-body text-sm tracking-wide text-text-secondary'
      >
        {t(`contact.values.${value.id}.description`)}
      </p>
    </article>
  )
}

export default Values
