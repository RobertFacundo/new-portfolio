'use client'

import { useState } from 'react'
import { PROJECTS } from '@/shared/constants/projects'
import ProjectCard from './ProjectCard'
import { FiArrowRight } from 'react-icons/fi'
import { useTranslation } from '@/shared/i18n/useTranslations'

const MobileProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useTranslation()

  const currentProject = PROJECTS[currentIndex]
  const nextIndex = (currentIndex + 1) % PROJECTS.length
  const nextProject = PROJECTS[nextIndex]

  const handleNext = () => {
    setCurrentIndex(nextIndex)
  }

  const nextText = t(`projects.items.${nextProject.id}`)

  return (
    <div className='mt-8 flex flex-col px-5 ml-9'>
      {/* Current project */}
      <ProjectCard project={currentProject} />

      {/* Next project preview */}
      <button
        type='button'
        onClick={handleNext}
        className='group mt-2 flex w-full items-center justify-around border-b border-gold/10 pb-5 text-left'
      >
        <div className='flex flex-col gap-1'>
          <span className='font-brand text-[10px] uppercase tracking-[0.3em] text-text-secondary'>
            {t('projects.next')}
          </span>

          <span className='font-display text-2xl tracking-widest text-text-primary transition-colors duration-300 group-hover:text-gold'>
            {nextText.title}
          </span>
        </div>

        <div className='flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-300 group-hover:border-gold/50 group-hover:translate-x-1 cursor-pointer'>
          <FiArrowRight />
        </div>
      </button>

      {/* Progress */}
      <div className='mt-5 flex items-center justify-around font-brand text-[10px] uppercase tracking-[0.25em] text-text-secondary'>
        <span>
          {String(currentIndex + 1).padStart(2, '0')} /{' '}
          {String(PROJECTS.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

export default MobileProjectsSection
