import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { ActiveCycleInfoContainer, TaskName, TaskDuration } from "./styles";

export function ActiveCycleInfo() {
  const { activeCycle } = useContext(CyclesContext);

  if (!activeCycle) {
    return null;
  }

  return (
    <ActiveCycleInfoContainer>
      <div>
        <TaskName>{activeCycle.task}</TaskName>
        <TaskDuration>{activeCycle.minutesAmount} minutos</TaskDuration>
      </div>
    </ActiveCycleInfoContainer>
  );
}
