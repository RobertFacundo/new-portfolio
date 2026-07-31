'use client'
import { NAVIGATION_LINKS } from '@/shared/constants/navigation'
import { useTranslation } from '@/shared/i18n/useTranslations'
import { FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

const Navigation = () => {
  const { t } = useTranslation()

  return (
    <nav className='hidden md:flex fixed top-0 left-0 w-full z-50 flex-row justify-between'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between '>
        <div className='flex items-center'>
          <a href='#hero' className='group flex items-center mt-2'>
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

        <div className='flex items-center gap-12 py-5 tracking-wider '>
          {NAVIGATION_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className='luxury-link mx-3 px-2'
            >
              {t.navigation[link.key]}
            </a>
          ))}
        </div>

        <a
          href='/cv.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='luxury-button '
        >
          {t.navigation.cv}
          <FiExternalLink className='ml-2 text-sm' />
        </a>
      </div>
    </nav>
  )
}

export default Navigation
