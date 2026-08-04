import { Project } from '@/features/projects/types/project'

export const PROJECTS: Project[] = [
  {
    id: 'vinyl-store',
    type: 'ecommerce',
    image: '/images/projects/vinyl.png',
    title: 'Vinyl Store',
    description:
      'A modern ecommerce experience focused on immersive animations and smooth interactions.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP']
  },
  {
    id: 'travel-landing',
    type: 'landing',
    image: '/images/projects/travel.png',
    title: 'Travel Landing',
    description: 'Luxury travel landing page with cinematic scroll animations.',
    techStack: ['Next.js', 'GSAP', 'Lenis']
  }
]
