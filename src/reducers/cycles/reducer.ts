import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesStates {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesStates, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    case ActionTypes.DELETE_CYCLES: {
      return produce(state, (draft) => {
        draft.cycles = draft.cycles.filter(
          (cycle) => cycle.task !== action.payload.taskName
        )
        if (
          draft.activeCycleId &&
          draft.cycles.find((cycle) => cycle.id === draft.activeCycleId)?.task ===
            action.payload.taskName
        ) {
          draft.activeCycleId = null
        }
      })
    }
    case ActionTypes.DELETE_SINGLE_CYCLE: {
      return produce(state, (draft) => {
        draft.cycles = draft.cycles.filter(
          (cycle) => cycle.id !== action.payload.cycleId
        )
        if (draft.activeCycleId === action.payload.cycleId) {
          draft.activeCycleId = null
        }
      })
    }
    default:
      return state
  }
}
