export interface PhilosophyPrinciple {
  id: string
  title: string
  description: string
}

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    id: 'component-thinking',
    title: 'Component Thinking',
    description: 'Reusable systems over isolated solutions.'
  },
  {
    id: 'modular-architecture',
    title: 'Modular Architecture',
    description: 'Clear boundaries. Independent pieces.'
  },
  {
    id: 'intentional-ux',
    title: 'Intentional UX',
    description: 'Every interaction should have a reason.'
  },
  {
    id: 'visual-precision',
    title: 'Visual Precision',
    description: 'Details define the experience.'
  },
  {
    id: 'continuous-refinement',
    title: 'Continuous Refinement',
    description: 'Build. Review. Refine.'
  }
]
