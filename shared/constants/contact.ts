import { CiClock1 } from 'react-icons/ci'
import { CiRead } from 'react-icons/ci'
import { CiLight } from 'react-icons/ci'
import type { IconType } from 'react-icons'

export interface ContactValue {
  id: string
  icon: IconType
}

export const CONTACT_VALUES: ContactValue[] = [
  {
    id: 'reliable',
    icon: CiClock1
  },
  {
    id: 'committed',
    icon: CiLight
  },
  {
    id: 'focused',
    icon: CiRead
  }
]
