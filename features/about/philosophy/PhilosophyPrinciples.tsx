interface Props {
  number: string
  title: string
  description: string
}

const PhilosophyPrinciple = ({ number, title, description }: Props) => {
  return (
    <article
      className='
      philosophy-principle
        flex
    flex-1
    items-center
    border-b
    border-gold/30
    last:border-b-0
    px-4
    py-5
      '
    >
      {/* Number */}
      <span
        className='
    flex
    h-8
    w-8
    shrink-0
    items-center
    justify-center
    rounded-full
    border
    border-gold
    font-body
    text-[11px]
    tracking-widest
    text-gold
    mr-3
  '
      >
        {number}
      </span>

      {/* Content */}
      <div
        className='
        flex
        flex-col
        border-l
        border-gold/20
        pl-5
      '
      >
        <h3
          className='
          font-brand
          text-[16px]
          uppercase
          tracking-widest
          text-gold
        '
        >
          {title}
        </h3>

        <p
          className='
          mt-2
          font-body
          text-[12px]
          leading-relaxed
          tracking-widest
          text-text-secondary
        '
        >
          {description}
        </p>
      </div>
    </article>
  )
}

export default PhilosophyPrinciple
