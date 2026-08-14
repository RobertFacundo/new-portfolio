interface PointerProps {
  position: 'top' | 'bottom'
}

const MilestonePointer = ({ position }: PointerProps) => {
  const isTop = position === 'top'

  return (
    <div
      className={`
        absolute
        left-1/2
        z-20
        h-4
        w-4
        -translate-x-[58px]
        rotate-45
        border
        border-gold
        bg-black
        ${isTop ? '-top-2' : '-bottom-2'}
        ${
          isTop
            ? 'border-r-transparent border-b-transparent'
            : 'border-l-transparent border-t-transparent'
        }
      `}
    />
  )
}

export default MilestonePointer
