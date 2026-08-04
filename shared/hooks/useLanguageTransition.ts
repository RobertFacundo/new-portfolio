'use client'
import { RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/shared/lib/gsap'
import { useLanguageStore } from '@/shared/stores/language.store'

interface Props {
  refs: RefObject<(HTMLElement | null)[]>
}

export const useLanguageTransition = ({ refs }: Props) => {
  const language = useLanguageStore(state => state.language)

  useGSAP(
    () => {
      const elements = refs.current.filter(
        (el): el is HTMLElement => el !== null
      )

      if (!elements.length) return

      const tl = gsap.timeline()

      tl.fromTo(
        elements,
        {
          opacity: 0,
          y: 6,
          filter: 'blur(3px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.95,
          stagger: 0.1,
          ease: 'power2.out'
        }
      )
    },
    {
      dependencies: [language]
    }
  )
}
