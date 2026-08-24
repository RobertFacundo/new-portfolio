import { TECHNOLOGIES } from '@/shared/constants/techStack'
import TechColumn from './TechColumn'
import { forwardRef } from 'react'

const TechSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className='grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-2'>
      {TECHNOLOGIES.map(category => (
        <TechColumn
          key={category.id}
          category={category.id}
          technologies={category.items}
        />
      ))}
    </div>
  )
})

TechSection.displayName = 'TechSection'

export default TechSection
