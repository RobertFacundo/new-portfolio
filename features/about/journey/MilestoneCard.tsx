'use client'
import { useJourneyStore } from '@/shared/stores/useJourneyStore'
import type { MilestonePoint } from '../utils/timeline.utils'
import MilestonePointer from './MilestonePointer'
import Image from 'next/image'
import { useTranslation } from '@/shared/i18n/useTranslations'
import { getMilestoneContent } from '../utils/timeline.utils'

interface Props {
  point: MilestonePoint
  position: 'top' | 'bottom'
}

const MilestoneCard = ({ point, position }: Props) => {
  const { t } = useTranslation()
  const hoveredMilestoneId = useJourneyStore(state => state.hoveredMilestoneId)
  const isHovered = hoveredMilestoneId === point.id
  const isTop = position === 'top'

  const milestone = getMilestoneContent(t, point.id)

  return (
    <div
      className={`
    relative h-full w-full
    transition-opacity duration-1000
    ${isHovered ? 'opacity-100' : 'opacity-0'}
  `}
    >
      {/* Pointer */}
      <MilestonePointer position={position} />

      {/* Card */}
      <div
        className={`
            luxury-milestone-card
            relative flex flex-row z-1
            ${isTop ? 'rounded-xl' : 'rounded-xl'}
            `}
      >
        <Image src={point.image} alt='' width={80} height={80} />
        <div className='flex flex-col w-2/3 gap-1 mx-auto'>
          <span className='text-[#EFBF73] font-brand text-[9px] text-right tracking-widest'>
            {milestone.date}
          </span>

          <h2 className='text-[#f5f5f2ef] font-display text-[12px] uppercase tracking-widest'>
            {milestone.title}
          </h2>

          <p className='text-[#bebaba] font-body text-[9px] tracking-widest text-left w-full pl-1'>
            {milestone.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MilestoneCard
