import Axes from './Axes'
import Curve from './Curve'
import Labels from './Labels'
import Milestones from './Milestone'

const Timeline = () => {
  return (
    <div className='relative flex-1'>
      <svg
        className='h-full w-full text-gold'
        viewBox='0 0 1000 600'
        preserveAspectRatio='none'
      >
        <Axes />
        <Curve />
        <Milestones />
      </svg>

      <Labels />
    </div>
  )
}

export default Timeline
