import { Project } from '@/features/projects/types/project'

export const PROJECTS: Project[] = [
  {
    id: 'vinyl-store',
    type: 'E-commerce',
    image: '/images/projects/vinylEcommerce.png',
    title: 'Vinyl Store',
    description:
      'A modern ecommerce experience focused on immersive animations and smooth interactions.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP'],
    github: 'https://github.com/RobertFacundo/vinylEcommerce',
    live: 'https://vinyl-ecommerce.vercel.app/ '
  },
  {
    id: 'travel-landing',
    type: 'Landing',
    image: '/images/projects/tourismLanding.png',
    title: 'Travel Landing',
    description:
      'A modern ecommerce experience focused on immersive animations and smooth interactions.',
    techStack: ['Next.js', 'GSAP', 'Lenis'],
    github: 'https://github.com/RobertFacundo/tourism-landing',
    live: 'https://tourism-landing-lovat.vercel.app/'
  }
]
