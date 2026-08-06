import type { Project } from '../types/project'

export const splitIntoColumns = (items: Project[], columns: number) => {
  return Array.from({ length: columns }, (_, column) =>
    items.filter((_, index) => index % columns === column)
  )
}
