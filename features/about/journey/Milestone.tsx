import { JOURNEY_MILESTONES } from '@/shared/constants/milestones'
import {
  getMilestonePoints,
  getMilestoneLabelPosition
} from '../utils/timeline.utils'
import MilestoneDot from './MilestoneDot'

const Milestones = () => {
  const points = getMilestonePoints(JOURNEY_MILESTONES)

  return (
    <>
      {points.map(point => (
        <MilestoneDot
          id={point.id}
          key={point.id}
          x={point.x}
          y={point.y}
          position={getMilestoneLabelPosition(point.progress)}
        />
      ))}
    </>
  )
}

export default Milestones
