import { Project } from '../types/project'
import ProjectPreview from './ProjectPreview'

interface Props {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <article className='luxury-card group flex flex-col w-[430px] pt-3'>
      <ProjectPreview project={project} />

      <div className='flex flex-col gap-5 justify-center pl-4 pb-3'>
        <div className='flex flex-col gap-1'>
          <h3 className='font-display text-3xl tracking-widest text-text-primary '>
            {project.title}
          </h3>

          <p className='text-text-secondary font-body text-sm tracking-wider'>
            {project.description}
          </p>
        </div>

        <div className='flex flex-row gap-2'>
          {project.techStack.map(tech => (
            <span
              key={tech}
              className='font-brand text-gold py-1 px-3 tracking-wide rounded-lg bg-background'
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
