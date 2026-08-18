'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { setLenis } from '../lib/lenis'

export default function SmoothScrollProvider ({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 0.8
    })

    setLenis(lenis)

    lenis.on('scroll', ScrollTrigger.update)

    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(update)
    }
  }, [])

  return children
}
