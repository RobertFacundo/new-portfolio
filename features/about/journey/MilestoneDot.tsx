import { TIMELINE } from '@/shared/constants/timeline'

interface Props {
  x: number
  y: number
  position: 'top' | 'bottom'
}

const MilestoneDot = ({ x, y, position }: Props) => {
  const labelY =
    position === 'top' ? TIMELINE.yBottom - 140 : TIMELINE.yTop + 100

  const lineEndY = labelY - y

  return (
    <g transform={`translate(${x} ${y})`}>
      <line
        x1='0'
        y1='0'
        x2='0'
        y2={lineEndY}
        stroke='#EFBF73'
        strokeWidth='1.2'
        strokeDasharray='4 3'
        opacity='0.45'
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
