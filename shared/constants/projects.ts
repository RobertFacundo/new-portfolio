import { Project } from '@/features/projects/types/project'

export const PROJECTS: Project[] = [
  {
    id: 'vinyl-store',
    image: '/images/projects/vinylEcommerce.png',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP', 'OpenAI'],
    github: 'https://github.com/RobertFacundo/vinylEcommerce',
    live: 'https://vinyl-ecommerce.vercel.app/'
  },

  {
    id: 'travel-landing',
    image: '/images/projects/tourismLanding.png',
    techStack: ['Next.js', 'GSAP', 'Lenis', 'TypeScript', 'OpenAI'],
    github: 'https://github.com/RobertFacundo/tourism-landing',
    live: 'https://tourism-landing-lovat.vercel.app/'
  },

  {
    id: 'book-store',
    image: '/images/projects/bookStore.png',
    techStack: ['Next.js', 'TypeScript', 'Zustand', 'React Query', 'GSAP'],
    github: 'https://github.com/RobertFacundo/book-store',
    live: 'https://book-store-zeta-ruby.vercel.app/'
  },

  {
    id: 'christmas-landing',
    image: '/images/projects/christmasLanding.png',
    techStack: ['Next.js', 'TypeScript', 'Three.js', 'GSAP'],
    github: 'https://github.com/RobertFacundo/christmas-landing',
    live: 'https://christmas-landing-kappa.vercel.app/'
  },

  {
    id: 'halloween-landing',
    image: '/images/projects/halloweenLanding.png',
    techStack: ['React', 'TypeScript', 'GSAP', 'Lenis', 'Three.js'],
    github: 'https://github.com/RobertFacundo/halloweenLanding',
    live: 'https://halloween-landing-rho.vercel.app/'
  },

  {
    id: 'flower-delivery',
    image: '/images/projects/flowerDelivery.png',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind', 'GSAP'],
    github: 'https://github.com/RobertFacundo/flowerDelivery',
    live: 'https://flower-delivery-ecru.vercel.app/'
  }
]
