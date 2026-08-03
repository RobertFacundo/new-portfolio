'use client'
import { useTranslation } from '@/shared/i18n/useTranslations'
import Buttons from './Buttons'
import SocialLinks from './SocialLinks'
import { useRef } from 'react'
import { useHeroAnimation } from '../animations/useHeroAnimation'

const HeroContent = () => {
  const { t } = useTranslation()
  const container = useRef<HTMLDivElement>(null)
  const eyebrow = useRef<HTMLSpanElement>(null)
  const title = useRef<HTMLHeadingElement>(null)
  const subtitle = useRef<HTMLHeadingElement>(null)
  const paragraph = useRef<HTMLParagraphElement>(null)
  const buttons = useRef<HTMLDivElement>(null)
  const social = useRef<HTMLDivElement>(null)

  useHeroAnimation({
    container,
    eyebrow,
    title,
    subtitle,
    paragraph,
    buttons,
    social
  })

  return (
    <div
      ref={container}
      className='flex w-1/3 flex-col justify-center pl-17 gap-6'
    >
      <div className='flex flex-col gap-3'>
        <span
          ref={eyebrow}
          className='font-brand text-[12px] tracking-[0.3em] text-gold uppercase font-bold'
        >
          {t.hero.eyebrow}
        </span>

        <h1
          ref={title}
          className='font-display text-[100px] leading-[0.8] text-text-primary ml-1 tracking-wide mt-2'
        >
          Facundo
          <br />
          Robert
        </h1>
      </div>

      <h2
        ref={subtitle}
        className='text-gold text-[11px] font-bold tracking-widest uppercase font-brand'
      >
        {t.hero.subtitle}
      </h2>

      <p
        ref={paragraph}
        className='font-body text-text-secondary mb-5 tracking-wider leading-6 text-lg w-[540px]'
      >
        {t.hero.paragraph}
      </p>
      <Buttons ref={buttons} />
      <SocialLinks ref={social} />
    </div>
  )
}

export default HeroContent
