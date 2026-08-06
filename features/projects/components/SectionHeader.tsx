import { cn } from '@/shared/lib/classes'
import { CgArrowsExchange } from 'react-icons/cg'

interface SectionHeaderProps {
  title: string
  open?: boolean
  onToggle?: () => void
}

const SectionHeader = ({ title, open, onToggle }: SectionHeaderProps) => {
  return (
    <div className='flex w-full items-center justify-between px-5'>
      <h1
        className='
          font-brand
          text-xs
          uppercase
          tracking-[0.5em]
          text-gold
          pb-3
          border-b
          border-gold/40
        '
      >
        {title}
      </h1>

      {onToggle && (
        <button
          onClick={onToggle}
          className='
            flex
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

export default SectionHeader
