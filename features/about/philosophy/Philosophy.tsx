import Image from 'next/image'
import PhilosophyPrinciple from './PhilosophyPrinciples'
import { PHILOSOPHY_PRINCIPLES } from '@/shared/constants/principles'

const Philosophy = () => {
  return (
    <section className='w-1/3 flex flex-col items-center'>
      {/* Header */}
      <div className='flex flex-col items-center text-center mt-4'>
        <Image
          src='/images/about/philosophy.png'
          alt='Philosophy'
          width={80}
          height={80}
        />

        <span className=' luxury-title my-3'>Philosophy</span>

        <p className='mt-2 font-body text-[14px] tracking-widest text-text-secondary'>
          Principles behind the way I build.
        </p>
      </div>

      {/* Principles */}
      <div className='mt-8 w-full flex-1'>
        <div className='flex h-full flex-col'>
          {PHILOSOPHY_PRINCIPLES.map((principle, index) => (
            <PhilosophyPrinciple
              key={principle.id}
              number={String(index + 1).padStart(2, '0')}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Philosophy
