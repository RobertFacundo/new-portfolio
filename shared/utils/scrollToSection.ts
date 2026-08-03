'use client'

import { getLenis } from '@/shared/lib/lenis'

export const useSmoothScroll = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector<HTMLElement>(id)

    if (!element) return

    const lenis = getLenis()

    lenis?.scrollTo(element)
  }

  return {
    scrollTo
  }
}
