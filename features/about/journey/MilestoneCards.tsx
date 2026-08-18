import { JOURNEY_MILESTONES } from '@/shared/constants/milestones'
import {
  getMilestoneLabelPosition,
  getMilestonePoints
} from '../utils/timeline.utils'
import MilestoneCard from './MilestoneCard'

const MilestoneCards = () => {
  const points = getMilestonePoints(JOURNEY_MILESTONES)

  return (
    <>
      {points.map(point => {
        const position = getMilestoneLabelPosition(point.progress)

        const cardY = position === 'top' ? point.y + 20 : point.y - 190

        return (
          <foreignObject
            key={point.id}
            x={point.x - 100}
            y={cardY}
            width={300}
            height={173}
          >
            <div className='h-full w-full py-3'>
              <MilestoneCard point={point} position={position} />
            </div>
          </foreignObject>
        )
      })}
    </>
  )
}

export default MilestoneCards
