'use client'
import { useTranslation } from '@/shared/i18n/useTranslations'
import Buttons from './Buttons'
import SocialLinks from './SocialLinks'

const HeroContent = () => {
  const { t } = useTranslation()
  return (
    <div className='flex w-1/3 flex-col justify-center pl-17 gap-6'>
      <div className='flex flex-col gap-3'>
        <span className='font-brand text-[12px] tracking-[0.3em] text-gold uppercase font-bold'>
          {t.hero.eyebrow}
        </span>

        <h1 className='font-display text-[110px] leading-[0.8] text-text-primary ml-1'>
          FACUNDO
          <br />
          ROBERT
        </h1>
      </div>

      <h2 className='text-gold text-[11px] font-bold tracking-widest uppercase font-brand'>
        {t.hero.subtitle}
      </h2>

      <p className='font-body text-text-secondary mb-5 tracking-wide leading-6 text-lg w-[540px]'>
        {t.hero.paragraph}
      </p>
      <Buttons />
      <SocialLinks />
    </div>
  )
}

export default HeroContent
