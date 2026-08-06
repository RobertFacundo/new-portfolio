import { Project } from '../types/project'
import ProjectPreview from './ProjectPreview'

interface Props {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <article className='luxury-card group flex flex-col w-[440px] pt-3 mb-5'>
      <ProjectPreview project={project} />

      <div className='flex flex-col gap-1 justify-center pl-4 pb-3'>
        <div className='flex flex-col gap-1'>
          <h3 className='font-display text-3xl tracking-widest text-text-primary '>
            {project.title}
          </h3>

          <p className='text-text-secondary font-body text-sm tracking-wider'>
            {project.description}
          </p>
        </div>

        <div className='min-h-[70px] flex flex-wrap content-center gap-2 '>
          {project.techStack.map(tech => (
            <span
              key={tech}
              className='font-brand text-gold py-1 px-3 tracking-wide rounded-lg bg-background text-[14px]'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
