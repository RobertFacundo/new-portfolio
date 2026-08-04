import { PROJECTS } from '@/shared/constants/projects'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <div className='grid grid-cols-3 gap-8 mt-12'>
      {PROJECTS.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectsSection
