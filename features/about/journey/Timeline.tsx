'use client'
import { useRef } from 'react'
import Axes from './Axes'
import Curve from './Curve'
import Labels from './Labels'
import Milestones from './Milestone'
import MilestoneCards from './MilestoneCards'
import MilestoneLabels from './MilestoneLabels'
import { useTimelineAnimation } from '../animations/useTimelineAnimation'

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null)
  useTimelineAnimation(timelineRef)

  return (
    <div ref={timelineRef} className='relative flex-1'>
      <svg
        className='h-full w-full text-gold'
        viewBox='0 0 1000 600'
        preserveAspectRatio='none'
      >
        <Axes />
        <Curve />
        <g className='timeline-content'>
          <Milestones />
          <MilestoneLabels />
          <MilestoneCards />
        </g>
      </svg>

      <Labels />
    </div>
  )
}

export default Timeline
