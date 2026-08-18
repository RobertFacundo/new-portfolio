'use client'

import { useLayoutEffect, RefObject } from 'react'
import { gsap } from '@/shared/lib/gsap'

export const useTimelineAnimation = (
  containerRef: RefObject<HTMLDivElement | null>
) => {
  useLayoutEffect(() => {
    const container = containerRef.current

    if (!container) return

    const ctx = gsap.context(() => {
      const axisY = container.querySelector<SVGLineElement>('.timeline-axis-y')
      const axisX = container.querySelector<SVGLineElement>('.timeline-axis-x')
      const curve = container.querySelector<SVGGElement>('.timeline-curve')
      const curvePath = container.querySelector<SVGPathElement>(
        '.timeline-curve-main'
      )
      const content = container.querySelector<SVGGElement>('.timeline-content')

      if (!axisY || !axisX || !curve || !curvePath || !content) return

      const pathLength = curvePath.getTotalLength()

      gsap.set(curvePath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 45%',
          toggleActions: 'play none none none'
        }
      })

      timeline
        .fromTo(
          axisY,
          { opacity: 0, y: 450 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out'
          }
        )
        .fromTo(
          axisX,
          { opacity: 0, x: -450 },
          {
            opacity: 1,
            x: 0,
            duration: 1.4,
            ease: 'power2.out'
          },
          '-=0.8'
        )
        .to(
          curve,
          {
            opacity: 1,
            duration: 0.2
          },
          '-=0.3'
        )
        .to(
          curvePath,
          {
            strokeDashoffset: 0,
            duration: 3.4,
            ease: 'power2.inOut'
          },
          '-=1.9'
        )
        .fromTo(
          content,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 2.2,
            ease: 'power2.out'
          },
          '-=1.4'
        )
    }, container)

    return () => ctx.revert()
  }, [containerRef])
}
