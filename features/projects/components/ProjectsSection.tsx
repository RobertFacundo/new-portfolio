import { PROJECTS } from '@/shared/constants/projects'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <div className='grid grid-cols-3 gap-2 mt-10 ml-5'>
      {PROJECTS.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectsSection
