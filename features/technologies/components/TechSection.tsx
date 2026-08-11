import { TECHNOLOGIES } from '@/shared/constants/techStack'
import TechColumn from './TechColumn'

const TechSection = () => {
  return (
    <div className='grid grid-cols-3 gap-2'>
      {TECHNOLOGIES.map(category => (
        <TechColumn
          key={category.id}
          category={category.id}
          technologies={category.items}
        />
      ))}
    </div>
  )
}

export default TechSection
