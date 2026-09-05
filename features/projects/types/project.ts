export type ProjectId =
  | 'vinyl-store'
  | 'travel-landing'
  | 'book-store'
  | 'christmas-landing'
  | 'halloween-landing'
  | 'flower-delivery'
  | 'bijou-shopify'
  | 'furniro-ecommerce'
  | 'ecommerce-ui'

export interface Project {
  id: ProjectId
  image: string
  techStack: string[]
  github: string
  live: string
}
