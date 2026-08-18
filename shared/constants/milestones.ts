export interface JourneyMilestone {
  id: string
  progress: number
  image: string
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'foundation',
    progress: 20,
    image: '/images/about/brickwall.png'
  },
  {
    id: 'exploration',
    progress: 41,
    image: '/images/about/exploration.png'
  },
  {
    id: 'focus',
    progress: 77,
    image: '/images/about/dartboard.png'
  }
]
