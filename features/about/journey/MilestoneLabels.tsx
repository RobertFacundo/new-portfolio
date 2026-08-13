import { JOURNEY_MILESTONES } from '@/shared/constants/milestones'
import { TIMELINE } from '@/shared/constants/timeline'
import {
  getMilestoneLabelPosition,
  getMilestonePoints,
  getMilestoneLabelY
} from '../utils/timeline.utils'
import { splitPreview } from '../utils/timeline.utils'

const MilestoneLabels = () => {
  const points = getMilestonePoints(JOURNEY_MILESTONES)

  return (
    <>
      {points.map(point => {
        const previewLines = splitPreview(point.preview)
        const position = getMilestoneLabelPosition(point.progress)

        const y = getMilestoneLabelY(position)

        return (
          <g key={point.id} transform={`translate(${point.x} ${y})`}>
            <text
              textAnchor='middle'
              className='fill-[#EFBF73] font-brand text-[12px]'
            >
              {point.date}
            </text>

            <text
              y='18'
              textAnchor='middle'
              className='fill-[#f5f5f2ef] font-display text-[12px] uppercase tracking-widest'
            >
              {point.title}
            </text>

            <text
              y='36'
              textAnchor='middle'
              className='fill-[#bebaba] font-body text-[10px] tracking-widest'
            >
              {previewLines.map((line, index) => (
                <tspan key={line} x='0' dy={index === 0 ? 0 : 14}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        )
      })}
    </>
  )
}

export default MilestoneLabels
