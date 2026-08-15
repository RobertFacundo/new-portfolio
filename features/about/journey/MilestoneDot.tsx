'use client'
import { TIMELINE } from '@/shared/constants/timeline'
import { useJourneyStore } from '@/shared/stores/useJourneyStore'

interface Props {
  x: number
  y: number
  position: 'top' | 'bottom'
  id: string
}

const MilestoneDot = ({ id, x, y, position }: Props) => {
  const setHoveredMilestoneId = useJourneyStore(
    state => state.setHoveredMilestone
  )
  const hoveredMilestoneId = useJourneyStore(state => state.hoveredMilestoneId)
  const isHovered = hoveredMilestoneId === id
  const labelY =
    position === 'top' ? TIMELINE.yBottom - 140 : TIMELINE.yTop + 100

  const lineEndY = labelY - y

  return (
    <g
      transform={`translate(${x} ${y})`}
      onMouseEnter={() => setHoveredMilestoneId(id)}
      onMouseLeave={() => setHoveredMilestoneId('focus')}
      cursor='pointer'
    >
      <circle cx='0' cy='0' r='22' fill='transparent' />
      <line
        x1='0'
        y1='0'
        x2='0'
        y2={lineEndY}
        stroke='#EFBF73'
        strokeWidth='1.2'
        strokeDasharray='4 3'
        opacity={isHovered ? 0 : 0.45}
        className='transition-opacity duration-900'
      />
      <defs>
        <filter
          id='milestone-dot-glow'
          x='-100%'
          y='-100%'
          width='300%'
          height='300%'
        >
          <feGaussianBlur stdDeviation='3' result='blur' />

          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <circle
        cx='0'
        cy='0'
        r='13'
        fill='none'
        stroke='#EFBF73'
        strokeWidth='2'
        opacity='0.35'
        filter='url(#milestone-dot-glow)'
      />

      {/* Outer ring */}
      <circle
        cx='0'
        cy='0'
        r='13'
        fill='none'
        stroke='#EFBF73'
        strokeWidth='1'
      />

      <circle
        cx='0'
        cy='0'
        r='19'
        fill='none'
        stroke='#EFBF73'
        strokeWidth='1'
        opacity={isHovered ? 0.45 : 0}
        className='transition-opacity duration-900'
      />
      <circle
        cx='0'
        cy='0'
        r='16'
        fill='none'
        stroke='#EFBF73'
        strokeWidth='5'
        opacity={isHovered ? 0.45 : 0}
        className='transition-opacity duration-900'
        filter='url(#milestone-dot-glow)'
      />

      {/* Core glow */}
      <circle
        cx='0'
        cy='0'
        r='5'
        fill='#EFBF73'
        filter='url(#milestone-dot-glow)'
      />

      {/* Core */}
      <circle cx='0' cy='0' r='5' fill='#EFBF73' />
    </g>
  )
}

export default MilestoneDot
