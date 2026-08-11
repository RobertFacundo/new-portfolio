import type { IconType } from 'react-icons'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiShopify
} from 'react-icons/si'

export interface Technology {
  name: string
  icon?: IconType
  logo?: string
  hideName?: boolean
}

export const TECHNOLOGIES = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Shopify', icon: SiShopify }
    ]
  },
  {
    id: 'libraries',
    title: 'Libraries & Tools',
    items: [
      { name: 'React Query', logo: '/images/techStack/React-Query.svg' },
      { name: 'Axios', logo: '/images/techStack/axios.svg' },
      { name: 'Zustand', logo: '/images/techStack/zustand.svg' },
      { name: 'Redux Toolkit', icon: SiRedux },
      { name: 'GSAP', logo: '/images/techStack/gsap.svg', hideName: true },
      { name: 'Three.js', icon: SiThreedotjs },
      { name: 'OpenAI', logo: '/images/techStack/openAi.svg' },
      { name: 'Lenis', logo: '/images/techStack/lenisScroll.png' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Data',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Mongoose', icon: SiMongoose },
      { name: 'Postman', logo: '/images/techStack/postman.png' }
    ]
  }
] as const
