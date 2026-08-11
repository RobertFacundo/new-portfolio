import type { Technology } from '@/shared/constants/techStack'

interface Props {
  technology: Technology
}

const TechCard = ({ technology }: Props) => {
  const Icon = technology.icon

  return (
    <div className='luxury-card flex flex-col items-center  justify-center  gap-2 rounded-xl border border-gold/10 py-3 w-fit py-3 px-4'>
      {Icon ? (
        <Icon className='text-3xl text-text-secondary' />
      ) : technology.logo ? (
        <img
          src={technology.logo}
          alt={technology.name}
          className='h-8 w-8 object-contain  mix-blend-screen'
        />
      ) : null}

      {!technology.hideName && (
        <span className='text-sm text-text-secondary'>{technology.name}</span>
      )}
    </div>
  )
}

export default TechCard
