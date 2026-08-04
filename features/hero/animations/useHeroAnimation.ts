import { useGSAP } from '@gsap/react'
import { gsap } from '@/shared/lib/gsap'

export const useHeroAnimation = ({
  container,
  eyebrow,
  title,
  subtitle,
  paragraph,
  buttons,
  social
}: any) => {
  useGSAP(
    () => {
      gsap.set(container.current, {
        visibility: 'visible'
      })

      const tl = gsap.timeline({
        defaults: {
          ease: 'expo.Out'
        }
      })

      tl.from(eyebrow.current, {
        opacity: 0,
        y: 20,
        duration: 0.8
      })

        .from(
          title.current,
          {
            opacity: 0,
            x: 80,
            duration: 1.2
          },
          '-=0.4'
        )

        .from(
          subtitle.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8
          },
          '-=0.5'
        )

        .from(
          paragraph.current,
          {
            opacity: 0,
            x: 15,
            duration: 1,
            ease: 'power4.inOut'
          },
          '-=0.4'
        )

        .from(
          buttons.current,
          {
            opacity: 0,
            y: 30,
            duration: 1
          },
          '-=0.4'
        )

        .from(
          social.current,
          {
            opacity: 0,
            y: 30,
            duration: 1
          },
          '-=0.6'
        )
    },
    {
      scope: container
    }
  )
}
