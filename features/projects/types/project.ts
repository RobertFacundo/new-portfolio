export type ProjectType = 'Landing' | 'E-commerce' | 'web-app'

export interface Project {
  id: string
  type: ProjectType
  image: string
  title: string
  description: string
  techStack: string[]
  github: string
  live: string
}
