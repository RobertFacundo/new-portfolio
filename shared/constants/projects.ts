import { Project } from '@/features/projects/types/project'

export const PROJECTS: Project[] = [
  {
    id: 'vinyl-store',
    type: 'E-commerce',
    image: '/images/projects/vinylEcommerce.png',
    title: 'Vinyl Store',
    description:
      'A modern ecommerce experience focused on immersive animations and smooth interactions.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP', 'OpenAI'],
    github: 'https://github.com/RobertFacundo/vinylEcommerce',
    live: 'https://vinyl-ecommerce.vercel.app/'
  },

  {
    id: 'travel-landing',
    type: 'Landing',
    image: '/images/projects/tourismLanding.png',
    title: 'Travel Landing',
    description:
      'A cinematic travel experience built with smooth scrolling and immersive transitions.',
    techStack: ['Next.js', 'GSAP', 'Lenis', 'TypeScript', 'OpenAI'],
    github: 'https://github.com/RobertFacundo/tourism-landing',
    live: 'https://tourism-landing-lovat.vercel.app/'
  },

  {
    id: 'book-store',
    type: 'E-commerce',
    image: '/images/projects/bookStore.png',
    title: 'Book Store',
    description:
      'An immersive bookstore ecommerce focused on scalable architecture and reusable components.',
    techStack: ['Next.js', 'TypeScript', 'Zustand', 'React Query', 'GSAP'],
    github: 'https://github.com/RobertFacundo/book-store',
    live: 'https://book-store-zeta-ruby.vercel.app/'
  },

  {
    id: 'christmas-landing',
    type: 'Landing',
    image: '/images/projects/christmasLanding.png',
    title: 'Christmas Landing',
    description:
      'A cinematic Christmas experience combining storytelling, smooth animations, and atmospheric visuals.',
    techStack: ['Next.js', 'TypeScript', 'Three.js', 'GSAP'],
    github: 'https://github.com/RobertFacundo/christmas-landing',
    live: 'https://christmas-landing-kappa.vercel.app/'
  },

  {
    id: 'halloween-landing',
    type: 'Landing',
    image: '/images/projects/halloweenLanding.png',
    title: 'Halloween Landing',
    description:
      'An immersive Halloween experience with advanced animations and real-time 3D effects.',
    techStack: ['React', 'TypeScript', 'GSAP', 'Lenis', 'Three.js'],
    github: 'https://github.com/RobertFacundo/halloweenLanding',
    live: 'https://halloween-landing-rho.vercel.app/'
  },

  {
    id: 'flower-delivery',
    type: 'E-commerce',
    image: '/images/projects/flowerDelivery.png',
    title: 'Flower Delivery',
    description:
      'A modern ecommerce frontend inspired by a Figma design, focused on responsive UI and smooth interactions.',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind', 'GSAP'],
    github: 'https://github.com/RobertFacundo/flowerDelivery',
    live: 'https://flower-delivery-ecru.vercel.app/'
  }
]
