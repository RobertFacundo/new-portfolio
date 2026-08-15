import { create } from 'zustand'

interface JourneyState {
  hoveredMilestoneId: string | null
  setHoveredMilestone: (id: string | null) => void
}

export const useJourneyStore = create<JourneyState>(set => ({
  hoveredMilestoneId: 'focus',
  setHoveredMilestone: id => {
    set({ hoveredMilestoneId: id })
  }
}))
