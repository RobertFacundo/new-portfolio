'use client'
import { useRef, useState } from 'react'
import ProjectsSection from './components/ProjectsSection'
import { useProjectsAnimations } from './animations/useProjectsAnimations'
import SectionHeader from './components/SectionHeader'

const Projects = () => {
  const [open, setOpen] = useState(false)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)

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
    </section>
  )
}

export default Projects
