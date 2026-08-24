'use client'
import { useTranslation } from '@/shared/i18n/useTranslations'
import Buttons from './Buttons'
import SocialLinks from './SocialLinks'
import { useRef } from 'react'
import { useHeroAnimation } from '../animations/useHeroAnimation'
import { TfiWorld } from 'react-icons/tfi'
import { HiOutlineLanguage } from 'react-icons/hi2'

const HeroContent = () => {
  const { t } = useTranslation()
  const container = useRef<HTMLDivElement>(null)
  const eyebrow = useRef<HTMLSpanElement>(null)
  const title = useRef<HTMLHeadingElement>(null)
  const subtitle = useRef<HTMLHeadingElement>(null)
  const paragraph = useRef<HTMLParagraphElement>(null)
  const buttons = useRef<HTMLDivElement>(null)
  const social = useRef<HTMLDivElement>(null)
  const availability = useRef<HTMLDivElement>(null)

  useHeroAnimation({
    container,
    eyebrow,
    title,
    subtitle,
    paragraph,
    buttons,
    social,
    availability
  })

  return (
    <div
      ref={container}
      className='hero-content relative flex w-1/3 flex-col justify-center pl-17 gap-6 mt-15'
    >
      <div className='flex flex-col gap-3'>
        <span
          ref={eyebrow}
          className='font-brand text-[12px] tracking-[0.3em] text-gold uppercase font-bold'
        >
          {t('hero.eyebrow')}
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
        {t('hero.subtitle')}
      </h2>

      <p
        ref={paragraph}
        className='font-body text-text-secondary mb-5 tracking-wider leading-6 text-lg w-[540px]'
      >
        {t('hero.paragraph')}
      </p>
      <Buttons ref={buttons} />
      <SocialLinks ref={social} />
      <div
        ref={availability}
        className='mt-5 flex flex-col gap-2 font-body text-xs uppercase tracking-[0.2em] text-text-secondary'
      >
        <div className='flex items-center gap-2'>
          <TfiWorld className='text-gold' size={14} />
          <span>Remote · Worldwide | Based in Argentina </span>
        </div>

        <div className='flex items-center gap-2'>
          <HiOutlineLanguage className='text-gold' size={15} />
          <span>C1 English</span>
        </div>
      </div>
    </div>
  )
}

export default HeroContent
