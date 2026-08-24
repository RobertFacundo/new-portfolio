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
      const hours = container.querySelector('.journey-header-hours')

      if (!eyebrow || !subtitle || !hours) return

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
            ease: 'sine.inOut'
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
            ease: 'sine.inOut'
          },
          '-=0.4'
        )
        .fromTo(
          hours,
          {
            opacity: 0,
            x: 15
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'sine.inOut'
          },
          '-=0.5'
        )
    }, container)

    return () => ctx.revert()
  }, [containerRef])
}
