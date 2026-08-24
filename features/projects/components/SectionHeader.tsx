import { cn } from '@/shared/lib/classes'
import { CgArrowsExchange } from 'react-icons/cg'
import { forwardRef } from 'react'

interface SectionHeaderProps {
  title: string
  open?: boolean
  onToggle?: () => void
}

const SectionHeader = forwardRef<HTMLHeadingElement, SectionHeaderProps>(
  ({ title, open, onToggle }, ref) => {
    return (
      <div className='flex w-full items-center justify-between px-5'>
        <h1
          ref={ref}
          className='
         luxury-title
        '
        >
          {title}
        </h1>

        {onToggle && (
          <button
            onClick={onToggle}
            className='
            hidden
            md:flex
            items-center
            justify-center
            text-text-secondary
            hover:text-gold
            text-3xl
            cursor-pointer
            transition-[transform, color]
            duration-700
            hover:scale-110
          '
          >
            <CgArrowsExchange
              className={cn(
                'transition-transform duration-500',
                open && 'rotate-180'
              )}
            />
          </button>
        )}
      </div>
    )
  }
)

export default SectionHeader
