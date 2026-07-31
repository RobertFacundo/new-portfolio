import { SOCIAL_LINKS } from '@/shared/constants/socialLinks'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FiMail
}

const SocialLinks = () => {
  return (
    <div className='flex items-center gap-13 justify-start'>
      {SOCIAL_LINKS.map(social => {
        const Icon = icons[social.icon]

        return (
          <a
            key={social.name}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
            className='luxury-icon text-5xl'
          >
            <Icon />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
