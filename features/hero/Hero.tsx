'use client'

import { useRef } from 'react'
import HeroContent from './components/HeroContent'
import HeroImage from './components/HeroImage'
import { useSectionAnimation } from './animations/useSectionAnimation'

const Hero = () => {
  const containerRef = useRef<HTMLElement | null>(null)

  useSectionAnimation({ containerRef })

  return (
    <section
      ref={containerRef}
      id='hero'
      className='flex h-screen items-center overflow-hidden opacity-0'
    >
      <HeroContent />
      <HeroImage />
    </section>
  )
}

export default Hero
