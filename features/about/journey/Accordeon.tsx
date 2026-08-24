'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiChevronDown } from 'react-icons/fi'
import { useTranslation } from '@/shared/i18n/useTranslations'
import { JOURNEY_MILESTONES } from '@/shared/constants/milestones'

const Accordeon = () => {
  const { t } = useTranslation()
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenId(current => (current === id ? null : id))
  }

  return (
    <div className='flex flex-col px-5 pb-10'>
      {JOURNEY_MILESTONES.map(milestone => {
        const isOpen = openId === milestone.id
        const text = t(`about.timeline.milestones.${milestone.id}`)

        return (
          <div key={milestone.id} className='border-b border-t border-gold/20'>
            <button
              type='button'
              onClick={() => handleToggle(milestone.id)}
              className='flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer'
              aria-expanded={isOpen}
            >
              <div className='flex min-w-0 items-center gap-4 '>
                <div className='relative h-14 w-14 shrink-0 overflow-hidden'>
                  <Image
                    src={milestone.image}
                    alt={text.title}
                    fill
                    className='object-cover'
                  />
                </div>

                <div className='flex min-w-0 flex-col gap-1'>
                  <span className='font-brand text-[10px] uppercase tracking-[0.25em] text-gold'>
                    {text.date}
                  </span>

                  <span className='font-display text-xl tracking-widest text-text-primary'>
                    {text.title}
                  </span>

                  <span className='font-body text-sm tracking-wide text-gold'>
                    {text.preview}
                  </span>
                </div>
              </div>

              <FiChevronDown
                className={`shrink-0 text-gold transition-transform duration-500 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                size={18}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className='overflow-hidden'>
                <p className='pb-6 pl-[72px] pr-4 font-body text-sm leading-6 tracking-wide text-text-secondary'>
                  {text.description}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordeon
