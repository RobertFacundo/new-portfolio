'use client'

import { useState, useEffect } from 'react'
import { PROJECTS } from '@/shared/constants/projects'
import ProjectCard from './ProjectCard'
import { ScrollTrigger } from '@/shared/lib/gsap'
import { refreshLenis } from '@/shared/lib/lenis'

const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false)

  const firstProjects = PROJECTS.slice(0, 3)
  const extraProjects = PROJECTS.slice(3)

  useEffect(() => {
    refreshLenis()
    ScrollTrigger.refresh()
  }, [showMore])

  return (
    <div>
      <div className='grid grid-cols-3 gap-2 mt-10 ml-5'>
        {firstProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {showMore &&
          extraProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>

      {extraProjects.length > 0 && (
        <button
          onClick={() => setShowMore(prev => !prev)}
          className='mx-auto cursor-pointer w-full font-brand tracking-widest text-gold'
        >
          {showMore ? 'Show Less' : 'View More'}
        </button>
      )}
    </div>
  )
}

export default ProjectsSection
