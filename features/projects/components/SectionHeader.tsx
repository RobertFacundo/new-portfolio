import { CgArrowsExchange } from 'react-icons/cg'
import { forwardRef } from 'react'

interface SectionHeaderProps {
  title: string
  onToggle?: () => void
}

const SectionHeader = forwardRef<HTMLHeadingElement, SectionHeaderProps>(
  ({ title, onToggle }, ref) => {
    return (
      <div className='flex w-full items-center justify-between px-5'>
        <h1 ref={ref} className='luxury-title'>
          {title}
        </h1>

        {onToggle && (
          <button
            onClick={onToggle}
            aria-label='Show more projects'
            className='
              group
              hidden
              md:flex
              items-center
              justify-center
              text-text-secondary
              hover:text-gold
              text-3xl
              cursor-pointer
            '
          >
            <CgArrowsExchange
              className='
                transition-all
                duration-500
                ease-out
                group-hover:scale-110
                group-hover:rotate-180
              '
            />
          </button>
        )}
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'

export default SectionHeader
