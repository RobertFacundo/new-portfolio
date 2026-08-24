'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from '@/shared/lib/gsap'

interface Props {
  containerRef: React.RefObject<HTMLElement | null>
}

export const useSectionAnimation = ({ containerRef }: Props) => {
  useGSAP(
    () => {
      const hero = containerRef.current

      if (!hero) return

      gsap.to(hero, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      })
    },
    {
      scope: containerRef
    }
  )
}
