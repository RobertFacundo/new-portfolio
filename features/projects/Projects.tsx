'use client'
import { useRef, useState } from 'react'
import ProjectsSection from './components/ProjectsSection'
import { useProjectsAnimations } from './animations/useProjectsAnimations'
import SectionHeader from './components/SectionHeader'
import { useTranslation } from '@/shared/i18n/useTranslations'

const Projects = () => {
  const [open, setOpen] = useState(false)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)
  const { t } = useTranslation()

  useProjectsAnimations({
    titleRef,
    projectsRef
  })

  return (
    <section id='projects' className='border-t border-gold/10 py-10  '>
      <SectionHeader
        ref={titleRef}
        title='Personal Projects'
        open={open}
        onToggle={() => setOpen(prev => !prev)}
      />
      <ProjectsSection open={open} ref={projectsRef} />
      <div className='mt-8 flex justify-start pl-5'>
        <a
          href='https://vercel.com/robertfacundos-projects'
          target='_blank'
          rel='noopener noreferrer'
          className='font-brand text-xs uppercase tracking-[0.25em] text-text-secondary transition-colors duration-300 hover:text-gold'
        >
          {t('projects.vercel')}
        </a>
      </div>
    </section>
  )
}

export default Projects
