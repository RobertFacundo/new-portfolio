import { Project } from '../types/project'

interface Props {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <article className='group'>
      <div>
        <img src={project.image} alt={project.title} />
      </div>

      <div>
        <span>{project.type}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div>
          {project.techStack.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
