import { cn } from '@/shared/lib/classes'
import ProjectCard from './ProjectCard'
import type { Project } from '../types/project'

interface ProjectStackProps {
  projects: Project[]
  open: boolean
}

const ProjectStack = ({ projects, open }: ProjectStackProps) => {
  return (
    <div className='relative h-[400px] overflow-hidden'>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={cn(
            'absolute inset-0 transition-all duration-700 ease-out',
            index === 0
              ? open
                ? 'scale-75 opacity-0'
                : 'scale-100 opacity-100'
              : open
              ? 'translate-y-0 opacity-100 scale-100'
              : 'translate-y-full opacity-0 scale-75'
          )}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}

export default ProjectStack
