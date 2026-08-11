import TechCard from './TechCard'
import type { Technology } from '@/shared/constants/techStack'

interface Props {
  title: string
  technologies: readonly Technology[]
}

const TechColumn = ({ title, technologies }: Props) => {
  return (
    <div className='flex flex-col gap-5 '>
      <h2 className='text-md font-brand tracking-widest text-text-secondary text-center'>
        {title}
      </h2>

      <div className='flex flex-wrap gap-3 mx-3 justify-center'>
        {technologies.map(technology => (
          <TechCard key={technology.name} technology={technology} />
        ))}
      </div>
    </div>
  )
}

export default TechColumn
