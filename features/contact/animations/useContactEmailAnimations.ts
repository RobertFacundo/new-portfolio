'use client'

import { useLayoutEffect, RefObject } from 'react'
import { gsap } from '@/shared/lib/gsap'

export const useContactEmailAnimation = (
  containerRef: RefObject<HTMLElement | null>
) => {
  useLayoutEffect(() => {
    const container = containerRef.current

    if (!container) return

    const ctx = gsap.context(() => {
      const fields = container.querySelectorAll('.contact-field')
      const button = container.querySelector('.contact-submit')
      const direct = container.querySelector('.contact-direct')

      if (!fields.length || !button || !direct) return

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 55%',
          toggleActions: 'play none none none'
        }
      })

      timeline
        .fromTo(
          fields,
          {
            opacity: 0,
            y: 15,
            scale: 0.98
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'sine.inOut'
          }
        )
        .fromTo(
          button,
          {
            opacity: 0,
            scale: 0.95,
            y: 10
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: 'sine.inOut'
          },
          '-=0.35'
        )
        .fromTo(
          direct,
          {
            opacity: 0,
            y: 10
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'sine.inOut'
          },
          '-=0.35'
        )
    }, container)

    return () => ctx.revert()
  }, [containerRef])
}
