import {
  ReactNode,
  createContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer";
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
  deleteCyclesAction,
} from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
  reactivateCycle: (cycleId: string) => void;
  deleteCycles: (taskName: string) => void;
  deleteSingleCycle: (cycleId: string) => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      try {
        const storedStateAsJSON = localStorage.getItem(
          "@ignite-timer:cycles-state-1.0.0",
        );

        if (storedStateAsJSON) {
          const parsedState = JSON.parse(storedStateAsJSON);
          
          if (parsedState && 
              typeof parsedState === 'object' && 
              Array.isArray(parsedState.cycles) &&
              (parsedState.activeCycleId === null || typeof parsedState.activeCycleId === 'string')) {
            return parsedState;
          } else {
            console.warn('Corrupted localStorage data found, resetting to initial state');
            localStorage.removeItem("@ignite-timer:cycles-state-1.0.0");
            return initialState;
          }
        }

        return initialState;
      } catch (error) {
        console.error('Error reading localStorage data:', error);
        localStorage.removeItem("@ignite-timer:cycles-state-1.0.0");
        return initialState;
      }
    },
  );

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  useEffect(() => {
    try {
      const stateJSON = JSON.stringify(cyclesState);
      localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJSON);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      try {
        localStorage.removeItem("@ignite-timer:cycles-state-1.0.0");
      } catch (clearError) {
        console.error('Error clearing localStorage:', clearError);
      }
    }
  }, [cyclesState]);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));

    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
  }

  function reactivateCycle(cycleId: string) {
    console.log('reactivateCycle called with:', cycleId);
    console.log('Current activeCycleId:', activeCycleId);
    
    if (activeCycleId) {
      console.log('Clearing current active cycle:', activeCycleId);
      dispatch({ type: 'INTERRUPT_CURRENT_CYCLE' });
    }

    const cycleToReactivate = cycles.find(cycle => cycle.id === cycleId);
    
    if (cycleToReactivate) {
      setTimeout(() => {
        const reactivatedCycle: Cycle = {
          ...cycleToReactivate,
          id: cycleToReactivate.id,
          startDate: new Date(),
          finishedDate: undefined,
          interruptedDate: undefined,
        };

        console.log('Reactivating cycle:', reactivatedCycle);
        
        dispatch({ 
          type: 'UPDATE_CYCLE', 
          payload: { cycleId: reactivatedCycle.id, cycle: reactivatedCycle } 
        });
        
        dispatch({ type: 'SET_ACTIVE_CYCLE', payload: { cycleId: reactivatedCycle.id } });
        
        setAmountSecondsPassed(0);
      }, 0);
    }
  }

  function deleteCycles(taskName: string) {
    dispatch(deleteCyclesAction(taskName));
  }

  function deleteSingleCycle(cycleId: string) {
    dispatch({ type: 'DELETE_SINGLE_CYCLE', payload: { cycleId } });
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        reactivateCycle,
        deleteCycles,
        deleteSingleCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
