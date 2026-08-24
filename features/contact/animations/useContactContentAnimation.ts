'use client'

import { useLayoutEffect, RefObject } from 'react'
import { gsap } from '@/shared/lib/gsap'

export const useContactContentAnimation = (
  containerRef: RefObject<HTMLElement | null>
) => {
  useLayoutEffect(() => {
    const container = containerRef.current

    if (!container) return

    const ctx = gsap.context(() => {
      const values = container.querySelectorAll('.contact-value')

      if (!values.length) return

      gsap.set(container, {
        opacity: 0,
        scale: 0.95,
        x: -110
      })

      gsap.set(values, {
        opacity: 0,
        scale: 0.95,
        y: 15
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 55%',
          toggleActions: 'play none none none'
        }
      })

      timeline
        .to(container, {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.8,
          ease: 'sine.inOut'
        })
        .to(
          values,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'sine.inOut'
          },
          '-=0.5'
        )
    }, container)

    return () => ctx.revert()
  }, [containerRef])
}
