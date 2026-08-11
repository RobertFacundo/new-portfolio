'use client'

import { NAVIGATION_LINKS } from '@/shared/constants/navigation'
import { useTranslation } from '@/shared/i18n/useTranslations'
import { useSmoothScroll } from '@/shared/utils/scrollToSection'

interface Props {
  refs: React.MutableRefObject<(HTMLElement | null)[]>
}

const Links = ({ refs }: Props) => {
  const { t } = useTranslation()
  const { scrollTo } = useSmoothScroll()

  return (
    <div className='flex items-center gap-12 py-5 tracking-wider font-brand'>
      {NAVIGATION_LINKS.map((link, index) => (
        <a
          key={link.href}
          ref={el => {
            refs.current[index] = el
          }}
          href={link.href}
          onClick={e => {
            e.preventDefault()
            scrollTo(link.href)
          }}
          className='luxury-link mx-3 px-2'
        >
          {t(`navigation.${link.key}`)}
        </a>
      ))}
    </div>
  )
}

export default Links
