import { JOURNEY_MILESTONES } from '@/shared/constants/milestones'
import { getCurvePath, getCurvePoints } from '../utils/timeline.utils'

const Curve = () => {
  const points = getCurvePoints(JOURNEY_MILESTONES)
  const path = getCurvePath(points)

  return (
    <g className='timeline-curve'>
      <defs>
        <filter id='timeline-glow' x='-50%' y='-50%' width='200%' height='200%'>
          <feGaussianBlur stdDeviation='4' result='blur' />

          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* Glow */}
      <path
        d={path}
        fill='none'
        stroke='#c68d38'
        strokeWidth='5'
        opacity='0.25'
        filter='url(#timeline-glow)'
      />

      {/* Main curve */}
      <path
        d={path}
        fill='none'
        stroke='#EFBF73'
        strokeWidth='1'
        className='timeline-curve-main'
      />
    </g>
  )
}

export default Curve
