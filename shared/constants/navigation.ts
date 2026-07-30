import type { Translation } from '@/shared/i18n'

type NavigationKey = keyof Translation['navigation']

export const NAVIGATION_LINKS: {
  key: NavigationKey
  href: string
}[] = [
  {
    key: 'projects',
    href: '#projects'
  },
  {
    key: 'technologies',
    href: '#technologies'
  },
  {
    key: 'about',
    href: '#about'
  },
  {
    key: 'contact',
    href: '#contact'
  }
]
