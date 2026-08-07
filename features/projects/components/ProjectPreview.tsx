import Image from 'next/image'
import { Project } from '../types/project'
import ProjectLinks from './ProjectLinks'

interface Props {
  project: Project
  text: {
    type: string
    title: string
    description: string
  }
}

const ProjectPreview = ({ project, text }: Props) => {
  return (
    <div className='relative mx-auto w-[390px] rounded-[24px]'>
      <ProjectLinks github={project.github} live={project.live} />

      <div className='overflow-hidden rounded-[24px]'>
        <Image
          src={project.image}
          alt={text.title}
          width={450}
          height={300}
          className='h-auto w-full object-cover'
        />
      </div>

      <div className='mt-2 flex justify-end'>
        <span className='font-brand text-xs uppercase tracking-[0.25em] text-gold'>
          {text.type}
        </span>
      </div>
    </div>
  )
}

export default ProjectPreview
