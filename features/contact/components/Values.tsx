import type { ContactValue as ContactValueData } from '@/shared/constants/contact'

interface Props {
  value: ContactValueData
}

const Values = ({ value }: Props) => {
  const Icon = value.icon

  return (
    <article className='border-r border-gold/20 px-3 py-6 last:border-r-0'>
      <div className='flex items-center gap-4'>
        <Icon size={30} className='text-gold' />

        <h3 className='font-brand text-base uppercase tracking-widest text-gold'>
          {value.title}
        </h3>
      </div>

      <p className='mt-3 pl-9 font-body text-sm tracking-wide text-text-secondary'>
        {value.description}
      </p>
    </article>
  )
}

export default Values
