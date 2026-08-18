import { gsap } from '@/shared/lib/gsap'
import { useGSAP } from '@gsap/react'
import { RefObject } from 'react'

interface Props {
  titleRef: RefObject<HTMLHeadingElement | null>
  columnsRef: RefObject<HTMLDivElement | null>
}

export const useTechStackAnimations = ({ titleRef, columnsRef }: Props) => {
  useGSAP(() => {
    if (!titleRef.current || !columnsRef.current) return

    const columns = columnsRef.current.children

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: columnsRef.current,
        start: 'top 75%',
        once: true
      }
    })

    timeline
      .from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'sine.out'
      })
      .from(
        columns,
        {
          scale: 0.7,
          filter: 'blur(9px)',
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'sine.out'
        },
        '-=0.4'
      )
  }, [])
}
