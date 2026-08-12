export interface JourneyMilestone {
  id: string
  date: string
  title: string
  description: string
  progress: number
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'foundation',
    date: 'JAN 2024',
    title: 'Foundation',
    description:
      'The journey begins. I entered the world of software development through full-stack training, building my foundations in HTML, CSS, React, Node.js, and backend development.',
    progress: 20
  },
  {
    id: 'exploration',
    date: 'JAN 2025',
    title: 'Exploration',
    description:
      'The course was only the beginning. I started building personal projects, experimenting with different technologies and turning knowledge into practical experience.',
    progress: 42
  },
  {
    id: 'focus',
    date: 'MAR 2026',
    title: 'Focus',
    description:
      'I chose a direction. My journey shifted toward frontend development, creating increasingly refined digital experiences while preparing to enter the professional world.',
    progress: 67
  }
]
