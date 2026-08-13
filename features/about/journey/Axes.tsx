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
      />

      {/* Y axis arrow */}
      <path
        d='M114 55 L120 45 L126 55'
        fill='none'
        stroke='currentColor'
        strokeWidth='1'
      />

      {/* X axis */}
      <line
        x1='100'
        y1={TIMELINE.yOrigin}
        x2={TIMELINE.xEnd}
        y2={TIMELINE.yOrigin}
        stroke='currentColor'
        strokeWidth='0.5'
      />

      {/* X axis arrow */}
      <path
        d='M925 514 L935 520 L925 526'
        fill='none'
        stroke='currentColor'
        strokeWidth='1'
      />
    </>
  )
}

export default Axes
