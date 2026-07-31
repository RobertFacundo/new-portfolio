import CTAButton from './CTAButton'
import SocialLinks from './SocialLinks'

const HeroContent = () => {
  return (
    <div className='flex w-1/3 flex-col justify-center pl-17 gap-8'>
      <div className='flex flex-col gap-1'>
        <span className='text-[12px] tracking-[0.3em] text-gold uppercase'>
          Frontend Developer
        </span>

        <h1 className='font-display text-[120px] leading-[0.8] text-text-primary ml-1'>
          Facundo
          <br />
          Robert
        </h1>
      </div>

      <h2 className='text-gold text-sm tracking-wide'>
        Building elegant digital experiences with React, Next.js & TypeScript.
      </h2>

      <p className='text-text-secondary'>
        Frontend developer focused on modern interfaces, scalable architecture,
        and creating products where design meets performance.
      </p>

      <div className='flex flex-row gap-3 justify-start'>
        <CTAButton href='#projects'>View Projects</CTAButton>

        <CTAButton href='#contact'>Contact Me</CTAButton>
      </div>
      <SocialLinks />
    </div>
  )
}

export default HeroContent
