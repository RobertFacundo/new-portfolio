import type { JourneyMilestone } from '@/shared/constants/milestones'
import { TIMELINE } from '@/shared/constants/timeline'

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface MilestonePoint extends JourneyMilestone {
  x: number
  y: number
}

export interface CurvePoint {
  x: number
  y: number
  progress?: number
}

/* -------------------------------------------------------------------------- */
/* Milestone positioning                                                      */
/* -------------------------------------------------------------------------- */

export const getMilestoneX = (index: number, total: number) => {
  if (total === 1) {
    return (TIMELINE.xStart + TIMELINE.xEnd) / 2
  }

  const start = TIMELINE.xStart + TIMELINE.milestonePadding
  const end = TIMELINE.xEnd - TIMELINE.milestonePaddingRight

  const spacing = (end - start) / (total - 1)

  return start + index * spacing
}

export const getMilestoneY = (progress: number) => {
  const height = TIMELINE.yOrigin - TIMELINE.yTop

  return TIMELINE.yOrigin - (progress / 100) * height
}

export const getMilestonePoints = (
  milestones: readonly JourneyMilestone[]
): MilestonePoint[] => {
  return milestones.map((milestone, index) => ({
    ...milestone,
    x: getMilestoneX(index, milestones.length),
    y: getMilestoneY(milestone.progress)
  }))
}

/* -------------------------------------------------------------------------- */
/* Curve points                                                               */
/* -------------------------------------------------------------------------- */

export const getCurvePoints = (
  milestones: readonly JourneyMilestone[]
): CurvePoint[] => {
  if (milestones.length === 0) return []

  const milestonePoints = getMilestonePoints(milestones)
  const lastMilestone = milestones[milestones.length - 1]

  const futureProgress = Math.min(lastMilestone.progress + 10, 100)

  return [
    {
      x: TIMELINE.xStart,
      y: milestonePoints[0].y
    },
    ...milestonePoints,
    {
      x: TIMELINE.xEnd,
      y: getMilestoneY(futureProgress)
    }
  ]
}

/* -------------------------------------------------------------------------- */
/* Curve generation                                                           */
/* -------------------------------------------------------------------------- */

const getVariation = (index: number) => {
  const value = Math.sin(index * 12.9898) * 43758.5453

  return value - Math.floor(value)
}
export const getCurvePath = (points: readonly CurvePoint[]) => {
  if (points.length === 0) return ''

  if (points.length === 1) {
    return `M ${points[0].x} ${points[0].y}`
  }

  let path = `M ${points[0].x} ${points[0].y}`

  for (let i = 0; i < points.length - 1; i++) {
    const current = points[i]
    const next = points[i + 1]

    const distanceX = next.x - current.x
    const distanceY = next.y - current.y

    const verticalChange = Math.abs(distanceY)

    const variation = getVariation(i)

    const horizontalTension = 0.3 + variation * 0.2
    const verticalInfluence = Math.min(
      verticalChange * (0.35 + variation * 0.3),
      distanceX * 0.4
    )

    const direction = Math.sign(distanceY)

    const controlX = distanceX * horizontalTension

    const controlY = verticalInfluence * direction

    path += `
      C
      ${current.x + controlX} ${current.y + controlY},
      ${next.x - controlX} ${next.y - controlY},
      ${next.x} ${next.y}
    `
  }

  return path
}

export const getMilestoneLabelPosition = (
  progress: number
): 'top' | 'bottom' => {
  return progress >= 50 ? 'top' : 'bottom'
}

export const splitPreview = (text: string, maxLength = 28) => {
  const words = text.split(' ')
  const lines: string[] = []
  let currentLine = ''

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word

    if (nextLine.length > maxLength) {
      lines.push(currentLine)
      currentLine = word
    } else {
      currentLine = nextLine
    }
  }

  if (currentLine) {
    lines.push(currentLine)
  }

  return lines.slice(0, 2)
}

export const getMilestoneLabelY = (position: 'top' | 'bottom') => {
  return position === 'top' ? TIMELINE.yBottom - 110 : TIMELINE.yTop + 40
}

export const getMilestoneCardY = (position: 'top' | 'bottom') => {
  return position === 'top' ? TIMELINE.yTop : TIMELINE.yBottom
}

export const getMilestoneContent = (
  t: (key: string) => string,
  id: string
) => ({
  date: t(`about.timeline.milestones.${id}.date`),
  title: t(`about.timeline.milestones.${id}.title`),
  preview: t(`about.timeline.milestones.${id}.preview`),
  description: t(`about.timeline.milestones.${id}.description`)
})

export const getPhilosophyPrincipleContent = (
  t: (key: string) => string,
  id: string
) => ({
  title: t(`about.philosophy.principles.${id}.title`),
  description: t(`about.philosophy.principles.${id}.description`)
})
