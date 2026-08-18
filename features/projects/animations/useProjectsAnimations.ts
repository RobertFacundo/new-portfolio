import { useGSAP } from '@gsap/react'
import { RefObject } from 'react'
import { gsap } from '@/shared/lib/gsap'

interface Props {
  titleRef: RefObject<HTMLHeadingElement | null>
  projectsRef: RefObject<HTMLDivElement | null>
}

export const useProjectsAnimations = ({ titleRef, projectsRef }: Props) => {
  useGSAP(() => {
    const title = titleRef.current
    const projects = projectsRef.current

    if (!title || !projects) return

    const cards = projects.querySelectorAll('.project-card')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projects,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })

    tl.fromTo(
      title,
      {
        opacity: 0,
        x: -20,
        filter: 'blur(6px)'
      },
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out'
      }
    )
    tl.fromTo(
      cards,
      {
        opacity: 0,
        scale: 0.75,
        filter: 'blur(6px)'
      },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        stagger: 0.65,
        ease: 'sine.out'
      },
      '-=0.7'
    )
  }, [])
}
