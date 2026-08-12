import { JOURNEY_MILESTONES } from '@/shared/constants/milestones'
import { getMilestonePoints } from '../utils/timeline.utils'
import MilestoneDot from './MilestoneDot'

const Milestones = () => {
  const points = getMilestonePoints(JOURNEY_MILESTONES)

  return (
    <>
      {points.map(point => (
        <MilestoneDot key={point.id} x={point.x} y={point.y} />
      ))}
    </>
  )
}

export default Milestones
