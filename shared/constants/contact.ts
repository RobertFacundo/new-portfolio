import { CiClock1 } from 'react-icons/ci'
import { CiRead } from 'react-icons/ci'
import { CiLight } from 'react-icons/ci'
import type { IconType } from 'react-icons'

export interface ContactValue {
  id: string
  title: string
  description: string
  icon: IconType
}

export const CONTACT_VALUES: ContactValue[] = [
  {
    id: 'reliable',
    title: 'Reliable',
    description: '— honest & clear communication. Consistent delivery.',
    icon: CiClock1
  },
  {
    id: 'committed',
    title: 'Committed',
    description: '— to becoming a professional developer.',
    icon: CiLight
  },
  {
    id: 'focused',
    title: 'Focused',
    description: '— on meaningful work over unnecessary complexity.',
    icon: CiRead
  }
]
