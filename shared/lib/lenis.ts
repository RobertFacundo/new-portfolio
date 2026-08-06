import type Lenis from 'lenis'

let lenis: Lenis | null = null

export const setLenis = (instance: Lenis) => {
  lenis = instance
}

export const getLenis = () => {
  return lenis
}

export const refreshLenis = () => {
  lenis?.resize()
}

export const getScroll = () => {
  return lenis?.scroll ?? window.scrollY
}

export const scrollTo = (target: number | HTMLElement, offset = 0) => {
  lenis?.scrollTo(target, {
    offset,
    duration: 1.5
  })
}
