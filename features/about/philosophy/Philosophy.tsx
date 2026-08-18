'use client'
import Image from 'next/image'
import PhilosophyPrinciple from './PhilosophyPrinciples'
import { PHILOSOPHY_PRINCIPLES } from '@/shared/constants/principles'
import { getPhilosophyPrincipleContent } from '../utils/timeline.utils'
import { useTranslation } from '@/shared/i18n/useTranslations'
import { useRef } from 'react'
import { usePhilosophyAnimation } from '../animations/usePhilosophyAnimations'

const Philosophy = () => {
  const { t } = useTranslation()
  const philosophyRef = useRef<HTMLElement>(null)
  usePhilosophyAnimation(philosophyRef)

  return (
    <section
      ref={philosophyRef}
      className='w-1/3 flex flex-col items-center overflow-hidden'
    >
      {/* Header */}
      <div className='philosophy-header flex flex-col items-center text-center mt-4'>
        <Image
          src='/images/about/philosophy.png'
          alt='Philosophy'
          width={80}
          height={80}
        />

        <span className=' luxury-title my-3'>
          {t('about.philosophy.title')}
        </span>

        <p className='mt-2 font-body text-[14px] tracking-widest text-text-secondary'>
          {t('about.philosophy.subtitle')}
        </p>
      </div>

      {/* Principles */}
      <div className='mt-8 w-full flex-1'>
        <div className=' flex h-full flex-col'>
          {PHILOSOPHY_PRINCIPLES.map((principle, index) => {
            const content = getPhilosophyPrincipleContent(t, principle.id)
            return (
              <PhilosophyPrinciple
                key={principle.id}
                number={String(index + 1).padStart(2, '0')}
                title={content.title}
                description={content.description}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Philosophy
