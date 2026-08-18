'use client'

import { useLayoutEffect, RefObject } from 'react'
import { gsap } from '@/shared/lib/gsap'

export const usePhilosophyAnimation = (
  containerRef: RefObject<HTMLElement | null>
) => {
  useLayoutEffect(() => {
    const container = containerRef.current

    if (!container) return

    const ctx = gsap.context(() => {
      const header = container.querySelector('.philosophy-header')
      const principles = container.querySelectorAll('.philosophy-principle')

      if (!header || !principles.length) return

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 45%',
          toggleActions: 'play none none none'
        }
      })

      timeline
        .fromTo(
          header,
          {
            opacity: 0,
            y: 12
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
          }
        )
        .fromTo(
          principles,
          {
            opacity: 0,
            x: 150
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.8,
            stagger: 0.5,
            ease: 'sine.out'
          },
          '-=0.7'
        )
    }, container)

    return () => ctx.revert()
  }, [containerRef])
}
