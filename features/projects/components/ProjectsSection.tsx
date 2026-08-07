'use client'

import { forwardRef } from 'react'
import { PROJECTS } from '@/shared/constants/projects'
import ProjectStack from './ProjectStack'
import { splitIntoColumns } from '../utils/splitColumns'

interface Props {
  open: boolean
}

const ProjectsSection = forwardRef<HTMLDivElement, Props>(({ open }, ref) => {
  const columns = splitIntoColumns(PROJECTS, 3)

  return (
    <div ref={ref} className='mt-10 ml-10'>
      <div className='grid grid-cols-3 gap-2'>
        {columns.map((column, index) => (
          <ProjectStack key={index} projects={column} open={open} />
        ))}
      </div>
    </div>
  )
})

ProjectsSection.displayName = 'ProjectsSection'

export default ProjectsSection
