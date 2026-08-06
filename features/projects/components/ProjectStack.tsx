import { cn } from '@/shared/lib/classes'
import ProjectCard from './ProjectCard'
import type { Project } from '../types/project'

interface ProjectStackProps {
  projects: Project[]
  open: boolean
}

const ProjectStack = ({ projects, open }: ProjectStackProps) => {
  const first = projects[0]
  const second = projects[1]

  return (
    <div className='relative h-[400px] overflow-hidden'>
      {first && (
        <div
          className={cn(
            'absolute inset-0 transition-all duration-700 ease-out',
            open ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
          )}
        >
          <ProjectCard project={first} />
        </div>
      )}

      {second && (
        <div
          className={cn(
            'absolute inset-0 transition-all duration-700 ease-out',
            open
              ? 'translate-y-0 opacity-100 scale-100'
              : 'translate-y-full opacity-0 scale-75'
          )}
        >
          <ProjectCard project={second} />
        </div>
      )}
    </div>
  )
}

export default ProjectStack
