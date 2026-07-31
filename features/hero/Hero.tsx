import HeroContent from './components/HeroContent'
import HeroImage from './components/HeroImage'

const Hero = () => {
  return (
    <section id='hero' className='flex h-screen items-center'>
      <HeroContent />
      <HeroImage />
    </section>
  )
}

export default Hero
