import { TIMELINE } from '@/shared/constants/timeline'

const Axes = () => {
  return (
    <>
      {/* Y axis */}
      <line
        x1={TIMELINE.xStart}
        y1={TIMELINE.yBottom}
        x2={TIMELINE.xStart}
        y2={TIMELINE.yTop}
        stroke='currentColor'
        strokeWidth='0.5'
        className='timeline-axis-y'
      />

      {/* Y axis arrow */}
      <path
        d='M114 55 L120 45 L126 55'
        fill='none'
        stroke='currentColor'
        strokeWidth='1'
        className='timeline-axis-y'
      />

      {/* X axis */}
      <line
        x1='100'
        y1={TIMELINE.yOrigin}
        x2={TIMELINE.xEnd}
        y2={TIMELINE.yOrigin}
        stroke='currentColor'
        strokeWidth='0.5'
        className='timeline-axis-x'
      />

      {/* X axis arrow */}
      <path
        d='M925 514 L935 520 L925 526'
        fill='none'
        stroke='currentColor'
        strokeWidth='1'
        className='timeline-axis-x'
      />
    </>
  )
}

export default Axes
