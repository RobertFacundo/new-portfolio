'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from '@/shared/lib/gsap'

interface Props {
  imageRef: React.RefObject<HTMLDivElement | null>
}

export const useHeroImageAnimation = ({ imageRef }: Props) => {
  useGSAP(
    () => {
      const image = imageRef.current

      if (!image) return

      gsap.set(image, {
        opacity: 0,
        scale: 1.05
      })

      gsap.to(image, {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        ease: 'power3.out',
        delay: 0.2
      })
    },
    {
      scope: imageRef
    }
  )
}
