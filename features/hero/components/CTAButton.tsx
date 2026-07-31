import { Children } from 'react'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
}

const CTAButton = ({ href, children }: CTAButtonProps) => {
  return (
    <a href={href} className='luxury-button'>
      {children}
    </a>
  )
}

export default CTAButton
