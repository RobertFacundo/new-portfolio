'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { useHeroImageAnimation } from '../animations/useHeroImageAnimation'

const HeroImage = () => {
  const imageRef = useRef<HTMLDivElement | null>(null)

  useHeroImageAnimation({ imageRef })

  return (
    <div
      ref={imageRef}
      className='relative flex h-full w-full items-end justify-end pb-5 pr-9 overflow-hidden'
    >
      <Image
        src='/images/bg-hero.png'
        alt='Cinematic laptop displaying code on a rock'
        width={900}
        height={700}
        priority
      />
      <div className='bg-black/30 absolute' />
    </div>
  )
}

export default HeroImage
