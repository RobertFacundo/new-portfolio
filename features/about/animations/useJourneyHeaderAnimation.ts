'use client'

import { useLayoutEffect, RefObject } from 'react'
import { gsap } from '@/shared/lib/gsap'

export const useJourneyHeaderAnimation = (
  containerRef: RefObject<HTMLDivElement | null>
) => {
  useLayoutEffect(() => {
    const container = containerRef.current

    if (!container) return

    const ctx = gsap.context(() => {
      const eyebrow = container.querySelector('.journey-header-eyebrow')
      const subtitle = container.querySelector('.journey-header-subtitle')

      if (!eyebrow || !subtitle) return

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 50%',
          toggleActions: 'play none none none'
        }
      })

      timeline
        .fromTo(
          eyebrow,
          {
            opacity: 0,
            y: 10
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
          }
        )
        .fromTo(
          subtitle,
          {
            opacity: 0,
            y: 10
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
          },
          '-=0.4'
        )
    }, container)

    return () => ctx.revert()
  }, [containerRef])
}
