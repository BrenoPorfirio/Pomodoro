import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  DELETE_CYCLES = 'DELETE_CYCLES',
  DELETE_SINGLE_CYCLE = 'DELETE_SINGLE_CYCLE',
  UPDATE_CYCLE = 'UPDATE_CYCLE',
  SET_ACTIVE_CYCLE = 'SET_ACTIVE_CYCLE',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function deleteCyclesAction(taskName: string) {
  return {
    type: ActionTypes.DELETE_CYCLES,
    payload: {
      taskName,
    },
  }
}

export function updateCycleAction(cycleId: string, cycle: Cycle) {
  return {
    type: ActionTypes.UPDATE_CYCLE,
    payload: {
      cycleId,
      cycle,
    },
  }
}

export function setActiveCycleAction(cycleId: string) {
  return {
    type: ActionTypes.SET_ACTIVE_CYCLE,
    payload: {
      cycleId,
    },
  }
}
