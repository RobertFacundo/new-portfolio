import { useTranslation } from '@/shared/i18n/useTranslations'
import TechCard from './TechCard'
import type { Technology } from '@/shared/constants/techStack'

interface Props {
  category: string
  technologies: readonly Technology[]
}

const TechColumn = ({ category, technologies }: Props) => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col gap-5 '>
      <h2 className='text-md font-brand tracking-widest text-text-secondary text-center'>
        {t(`techStack.categories.${category}`)}
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
