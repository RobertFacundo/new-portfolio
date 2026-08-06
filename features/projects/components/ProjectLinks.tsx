import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

interface Props {
  github: string
  live: string
}

const ProjectLinks = ({ github, live }: Props) => {
  const links = [
    {
      href: github,
      icon: FaGithub,
      label: 'GitHub Repository'
    },
    {
      href: live,
      icon: FiExternalLink,
      label: 'Live Demo'
    }
  ]

  return (
    <div className='absolute top-4 right-4 flex gap-3'>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='luxury-icon text-3xl'
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  )
}

export default ProjectLinks
