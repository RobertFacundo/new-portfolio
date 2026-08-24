'use client'

import Image from 'next/image'
import { NAVIGATION_LINKS } from '@/shared/constants/navigation'
import { useLanguageStore } from '@/shared/stores/language.store'
import { useSmoothScroll } from '@/shared/utils/scrollToSection'
import { useTranslation } from '@/shared/i18n/useTranslations'
import { useRef } from 'react'
import { useLanguageTransition } from '@/shared/hooks/useLanguageTransition'

const Footer = () => {
  const { language, setLanguage } = useLanguageStore()
  const { scrollTo } = useSmoothScroll()
  const { t } = useTranslation()

  const languageRefs = useRef<(HTMLElement | null)[]>([])

  useLanguageTransition({ refs: languageRefs })

  return (
    <footer className='w-full border-t border-gold/20 bg-[#0a0a0a]'>
      <div className='mx-auto flex w-full max-w-[1600px] items-center justify-between gap-8 px-6 md:py-5 md:px-10'>
        {/* Brand */}
        <div className='flex items-center gap-4'>
          <a
            href='#hero'
            onClick={e => {
              e.preventDefault()
              scrollTo('#hero')
            }}
            className='group'
          >
            <Image
              src='/images/logo.png'
              alt='Facundo Robert'
              width={34}
              height={45}
              className='transition-transform duration-500 group-hover:scale-[1.03]'
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className='hidden items-center gap-8 font-brand text-xs uppercase tracking-widest md:flex'>
          {NAVIGATION_LINKS.map((link, index) => (
            <a
              key={link.key}
              href={link.href}
              onClick={e => {
                e.preventDefault()
                scrollTo(link.href)
              }}
              ref={el => {
                languageRefs.current[index] = el
              }}
              className='text-text-secondary transition-colors duration-300 hover:text-gold'
            >
              {t(`navigation.${link.key}`)}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <span
          ref={el => {
            languageRefs.current[NAVIGATION_LINKS.length] = el
          }}
          className='font-brand text-xs uppercase tracking-[0.25em] text-gold'
        >
          © {new Date().getFullYear()} Facundo Robert
        </span>

        {/* Language */}
        <div className='flex items-center gap-3 font-brand text-xs uppercase tracking-widest'>
          <button
            onClick={() => setLanguage('en')}
            className={`transition-colors duration-300 cursor-pointer  ${
              language === 'en'
                ? 'text-gold'
                : 'text-text-secondary hover:text-gold'
            }`}
          >
            EN
          </button>

          <span className='text-gold/30'>/</span>

          <button
            onClick={() => setLanguage('es')}
            className={`transition-colors duration-300 cursor-pointer  ${
              language === 'es'
                ? 'text-gold'
                : 'text-text-secondary hover:text-gold'
            }`}
          >
            ES
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
