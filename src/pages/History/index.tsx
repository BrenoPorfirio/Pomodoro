import { useContext, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useNavigate } from "react-router-dom";
import { Play, CaretDown, Trash } from "phosphor-react";
import {
  HistoryContainer,
  HistoryList,
  Status,
  PaginationContainer,
  PaginationButton,
  FilterContainer,
  FilterButton,
  GroupedTaskRow,
  DetailsRow,
  ActionButton,
  ExpandIcon,
  DeleteButton,
  SummaryInfo,
  SingleTaskRow,
  GroupedActionCell,
  DurationInfo,
  StatusInfo,
} from "./styles";
import { CyclesContext } from "../../contexts/CyclesContext";

const ITEMS_PER_PAGE = 5;

interface GroupedCycle {
  task: string;
  cycles: {
    id: string;
    minutesAmount: number;
    startDate: Date | string;
    finishedDate?: Date | string;
    interruptedDate?: Date | string;
  }[];
}

type FilterType = "all" | "finished" | "interrupted";

export function History() {
  const { cycles, createCycleFromHistory, deleteCycles, deleteSingleCycle } = useContext(CyclesContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [filterType, setFilterType] = useState<FilterType>("all");
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const groupedByTask = cycles.reduce<Map<string, GroupedCycle>>(
    (acc, cycle) => {
      if (!acc.has(cycle.task)) {
        acc.set(cycle.task, {
          task: cycle.task,
          cycles: [],
        });
      }
      acc.get(cycle.task)!.cycles.push({
        id: cycle.id,
        minutesAmount: cycle.minutesAmount,
        startDate: cycle.startDate,
        finishedDate: cycle.finishedDate,
        interruptedDate: cycle.interruptedDate,
      });
      return acc;
    },
    new Map(),
  );

  const filteredGroups = Array.from(groupedByTask.values()).filter((group) => {
    if (filterType === "finished") {
      return group.cycles.every((c) => c.finishedDate);
    }
    if (filterType === "interrupted") {
      return group.cycles.every((c) => c.interruptedDate);
    }
    return true;
  });

  const totalPages = Math.ceil(filteredGroups.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentGroups = filteredGroups.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleGroup = (taskName: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(taskName)) {
      newExpanded.delete(taskName);
    } else {
      newExpanded.add(taskName);
    }
    setExpandedGroups(newExpanded);
  };

  const handleRunAgain = (task: string, minutesAmount: number) => {
    createCycleFromHistory({ task, minutesAmount });
    navigate("/");
  };

  const getStatusColor = (
    finishedDate: Date | string | undefined,
    interruptedDate: Date | string | undefined,
  ) => {
    if (finishedDate) return "green";
    if (interruptedDate) return "red";
    return "yellow";
  };

  const getStatusText = (
    finishedDate: Date | string | undefined,
    interruptedDate: Date | string | undefined,
  ) => {
    if (finishedDate) return "Concluído";
    if (interruptedDate) return "Interrompido";
    return "Em andamento";
  };

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <FilterContainer>
        <FilterButton
          isActive={filterType === "all"}
          onClick={() => {
            setFilterType("all");
            setCurrentPage(0);
          }}
        >
          Todas
        </FilterButton>
        <FilterButton
          isActive={filterType === "finished"}
          onClick={() => {
            setFilterType("finished");
            setCurrentPage(0);
          }}
        >
          Completas
        </FilterButton>
        <FilterButton
          isActive={filterType === "interrupted"}
          onClick={() => {
            setFilterType("interrupted");
            setCurrentPage(0);
          }}
        >
          Interrompidas
        </FilterButton>
      </FilterContainer>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentGroups.map((group) => {
              const isExpanded = expandedGroups.has(group.task);
              const cycleCount = group.cycles.length;
              const totalMinutes = group.cycles.reduce((sum, cycle) => sum + cycle.minutesAmount, 0);
              const finishedCount = group.cycles.filter(c => c.finishedDate).length;
              const interruptedCount = group.cycles.filter(c => c.interruptedDate).length;
              const isSingle = cycleCount === 1;
              const singleCycle = group.cycles[0];

              if (isSingle) {
                const finishedDate = singleCycle.finishedDate
                  ? singleCycle.finishedDate instanceof Date
                    ? singleCycle.finishedDate
                    : new Date(singleCycle.finishedDate)
                  : undefined;
                const interruptedDate = singleCycle.interruptedDate
                  ? singleCycle.interruptedDate instanceof Date
                    ? singleCycle.interruptedDate
                    : new Date(singleCycle.interruptedDate)
                  : undefined;

                return (
                  <SingleTaskRow key={group.task}>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <strong>{group.task}</strong>
                    </td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{singleCycle.minutesAmount} minutos</td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      {formatDistanceToNow(new Date(singleCycle.startDate), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <Status
                        statusColor={getStatusColor(
                          finishedDate,
                          interruptedDate,
                        )}
                      >
                        {getStatusText(finishedDate, interruptedDate)}
                      </Status>
                    </td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <div style={{ display: 'flex', gap: '0.25rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                        {!finishedDate && (
                          <ActionButton
                            onClick={() =>
                              handleRunAgain(group.task, singleCycle.minutesAmount)
                            }
                            title="Rodar novamente"
                          >
                            <Play size={16} />
                          </ActionButton>
                        )}
                        <DeleteButton
                          onClick={() => deleteCycles(group.task)}
                          title="Excluir tarefa"
                        >
                          <Trash size={16} />
                        </DeleteButton>
                      </div>
                    </td>
                  </SingleTaskRow>
                );
              }

              return (
                <>
                  <tr key={group.task}>
                    <GroupedTaskRow>
                      <ExpandIcon
                        onClick={() => toggleGroup(group.task)}
                        isExpanded={isExpanded}
                      >
                        <CaretDown size={20} />
                      </ExpandIcon>
                      <div>
                        <strong>{group.task}</strong>
                        <span className="count"> ({cycleCount})</span>
                      </div>
                    </GroupedTaskRow>
                    <td style={{ textAlign: 'center' }}>
                      <SummaryInfo>
                        <div>Total: {totalMinutes}min</div>
                        <div>✓ {finishedCount} ✗ {interruptedCount}</div>
                      </SummaryInfo>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {new Date(group.cycles[0].startDate).toLocaleTimeString('pt-BR', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <SummaryInfo>
                        <div>✓ {finishedCount} ✗ {interruptedCount}</div>
                      </SummaryInfo>
                    </td>
                    <GroupedActionCell>
                      <DeleteButton
                        onClick={() => deleteCycles(group.task)}
                        title="Excluir todas"
                      >
                        <Trash size={16} />
                      </DeleteButton>
                    </GroupedActionCell>
                  </tr>
                  {isExpanded && group.cycles.map((cycle) => {
                    const finishedDate = cycle.finishedDate
                      ? cycle.finishedDate instanceof Date
                        ? cycle.finishedDate
                        : new Date(cycle.finishedDate)
                      : undefined;
                    const interruptedDate = cycle.interruptedDate
                      ? cycle.interruptedDate instanceof Date
                        ? cycle.interruptedDate
                        : new Date(cycle.interruptedDate)
                      : undefined;

                    return (
                      <DetailsRow key={cycle.id}>
                        <td></td>
                        <td>
                          <DurationInfo>
                            <div>{cycle.minutesAmount} minutos</div>
                            <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                              {cycle.finishedDate ? 'Concluído' : cycle.interruptedDate ? 'Interrompido' : `${cycle.minutesAmount * 60 - Math.floor((new Date().getTime() - new Date(cycle.startDate).getTime()) / 1000)}s restantes`}
                            </div>
                          </DurationInfo>
                        </td>
                        <td>
                          {new Date(cycle.startDate).toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                          <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
                            {formatDistanceToNow(new Date(cycle.startDate), {
                              addSuffix: true,
                              locale: ptBR,
                            })}
                          </div>
                        </td>
                        <td>
                          <StatusInfo>
                            <Status
                              statusColor={getStatusColor(
                                finishedDate,
                                interruptedDate,
                              )}
                            >
                              {getStatusText(finishedDate, interruptedDate)}
                            </Status>
                          </StatusInfo>
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: '0.25rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                            {!finishedDate && (
                              <ActionButton
                                onClick={() =>
                                  handleRunAgain(group.task, cycle.minutesAmount)
                                }
                                title="Rodar novamente"
                              >
                                <Play size={16} />
                              </ActionButton>
                            )}
                            <DeleteButton
                              onClick={() => deleteSingleCycle(cycle.id)}
                              title="Excluir este ciclo"
                            >
                              <Trash size={16} />
                            </DeleteButton>
                          </div>
                        </td>
                      </DetailsRow>
                    );
                  })}
                </>
              );
            })}
          </tbody>
        </table>
      </HistoryList>

      {totalPages > 1 && (
        <PaginationContainer>
          <PaginationButton
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
          >
            ← Anterior
          </PaginationButton>
          <span>
            Página {currentPage + 1} de {totalPages}
          </span>
          <PaginationButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          >
            Próxima →
          </PaginationButton>
        </PaginationContainer>
      )}
    </HistoryContainer>
  );
}
