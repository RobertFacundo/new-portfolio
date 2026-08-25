'use client'
import { NAVIGATION_LINKS } from '@/shared/constants/navigation'
import { useTranslation } from '@/shared/i18n/useTranslations'
import { FiExternalLink } from 'react-icons/fi'
import { useSmoothScroll } from '@/shared/utils/scrollToSection'
import { useRef } from 'react'
import { useLanguageTransition } from '@/shared/hooks/useLanguageTransition'
import Image from 'next/image'
import Links from './Links'

const Navigation = () => {
  const { t } = useTranslation()
  const { scrollTo } = useSmoothScroll()
  const languageRefs = useRef<(HTMLElement | null)[]>([])

  useLanguageTransition({ refs: languageRefs })

  return (
    <nav className='hidden md:flex fixed top-0 left-0 w-full z-50 flex-row justify-between  bg-[#0a0a0a]/60 backdrop-blur-sm'>
      <div className='flex w-full items-center justify-between px-6 md:px-10'>
        <div className='flex items-center'>
          <a
            href='#hero'
            onClick={e => {
              e.preventDefault()
              scrollTo('#hero')
            }}
            className='group flex items-center mt-2'
          >
            <Image
              src='/images/logo.png'
              alt='Facundo Robert'
              width={77}
              height={102}
              priority
              className='transition-all duration-500 group-hover:scale-[1.03]'
            />
          </a>
        </div>

        <Links refs={languageRefs} />

        <a
          href='/Robert-CV.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='luxury-button font-brand group'
        >
          <span
            ref={el => {
              languageRefs.current[NAVIGATION_LINKS.length] = el
            }}
          >
            {t('navigation.cv')}
          </span>
          <FiExternalLink
            className='ml-2 text-sm transition-transform
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1'
          />
        </a>
      </div>
    </nav>
  )
}

export default Navigation
