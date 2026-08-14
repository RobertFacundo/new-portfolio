import type { MilestonePoint } from '../utils/timeline.utils'
import MilestonePointer from './MilestonePointer'

interface Props {
  point: MilestonePoint
  position: 'top' | 'bottom'
}

const MilestoneCard = ({ point, position }: Props) => {
  const isTop = position === 'top'

  return (
    <div className='relative h-full w-full'>
      {/* Pointer */}
      <MilestonePointer position={position} />

      {/* Card */}
      <div
        className={`
            luxury-milestone-card
            relative z-1
            ${isTop ? 'rounded-xl' : 'rounded-xl'}
            `}
      >
        <span className='text-[#EFBF73] font-brand text-[9px]'>
          {point.date}
        </span>

        <h2 className='text-[#f5f5f2ef] font-display text-[12px] uppercase tracking-widest'>
          {point.title}
        </h2>

        <p className='text-[#bebaba] font-body text-[10px] tracking-widest'>
          {point.description}
        </p>
      </div>
    </div>
  )
}

export default MilestoneCard
