'use client'

import { forwardRef } from 'react'
import { PROJECTS } from '@/shared/constants/projects'
import ProjectCard from './ProjectCard'
import { cn } from '@/shared/lib/classes'

interface Props {
  page: number
}

const ProjectsSection = forwardRef<HTMLDivElement, Props>(({ page }, ref) => {
  const start = page * 3
  const visibleProjects = PROJECTS.slice(start, start + 3)

  return (
    <div ref={ref} className='mt-10 ml-10'>
      <div className='grid grid-cols-3 gap-2'>
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              'animate-project-enter',
              index === 0 && '[animation-delay:0ms]',
              index === 1 && '[animation-delay:100ms]',
              index === 2 && '[animation-delay:200ms]'
            )}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
})

ProjectsSection.displayName = 'ProjectsSection'

export default ProjectsSection
