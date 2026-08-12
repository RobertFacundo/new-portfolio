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
  const end = TIMELINE.xEnd - TIMELINE.milestonePadding

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

    const controlX = distanceX * 0.35

    const direction = Math.sign(distanceY)

    const controlY = Math.abs(distanceY) * 0.35

    path += `
      C
      ${current.x + controlX} ${current.y + controlY * direction},
      ${next.x - controlX} ${next.y - controlY * direction},
      ${next.x} ${next.y}
    `
  }

  return path
}
