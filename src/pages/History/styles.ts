import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  h1 {
    font-size: 1.75rem;
    color: ${(props) => props.theme["gray-100"]};
    margin-bottom: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 0.75rem;
  }
`;

interface FilterButtonProps {
  isActive: boolean;
}

export const FilterButton = styled.button<FilterButtonProps>`
  padding: 0.6rem 1rem;
  background: ${(props) =>
    props.isActive ? props.theme["green-500"] : props.theme["gray-600"]};
  color: ${(props) => props.theme["gray-100"]};
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.75rem;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.7rem;
    border-radius: 3px;
  }

  &:hover {
    background: ${(props) =>
      props.isActive ? props.theme["green-700"] : props.theme["gray-500"]};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const HistoryList = styled.main`
  flex: 1;
  width: 100%;
  overflow: auto;
  margin-top: 1rem;
  border-radius: 8px;
  background: ${(props) => props.theme["gray-700"]};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    margin-top: 0.75rem;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    margin-top: 0.5rem;
    border-radius: 4px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 100%;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }

    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1.25rem;
      text-align: center;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;
      font-weight: 600;
      position: sticky;
      top: 0;
      z-index: 10;
      border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
      white-space: nowrap;

      @media (max-width: 768px) {
        padding: 0.875rem;
        font-size: 0.8rem;
      }

      @media (max-width: 480px) {
        padding: 0.5rem;
        font-size: 0.7rem;
      }

      &:first-child {
        border-radius: 8px 0 0 0;
        padding-left: 1.5rem;
        text-align: left;

        @media (max-width: 768px) {
          padding-left: 0.875rem;
        }

        @media (max-width: 480px) {
          padding-left: 0.5rem;
          border-radius: 4px 0 0 0;
        }
      }

      &:last-child {
        border-radius: 0 8px 0 0;
        padding-right: 1.5rem;

        @media (max-width: 768px) {
          padding-right: 0.875rem;
        }

        @media (max-width: 480px) {
          padding-right: 0.5rem;
          border-radius: 0 4px 0 0;
        }
      }
    }

    tbody tr {
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: ${(props) => props.theme["gray-600"]};
      }

      &:last-child td {
        border-bottom: none;
      }
    }

    td {
      background-color: transparent;
      border-top: 1px solid ${(props) => props.theme["gray-600"]};
      padding: 1.25rem;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme["gray-100"]};
      word-break: break-word;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;

      @media (max-width: 768px) {
        padding: 0.875rem;
        font-size: 0.8rem;
      }

      @media (max-width: 480px) {
        padding: 0.5rem;
        font-size: 0.75rem;
      }

      &:first-child {
        width: 50%;
        text-align: left;
        padding-left: 1.5rem;
        white-space: normal;

        @media (max-width: 768px) {
          padding-left: 0.875rem;
        }

        @media (max-width: 480px) {
          padding-left: 0.5rem;
          width: auto;
        }
      }

      &:last-child {
        padding-right: 1.5rem;

        @media (max-width: 768px) {
          padding-right: 0.875rem;
        }

        @media (max-width: 480px) {
          padding-right: 0.5rem;
        }
      }
    }
  }
`;

export const GroupedTaskRow = styled.td`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.2s ease-in-out;
  text-align: left;
  vertical-align: middle;
  padding: 1.25rem;
  padding-left: 1.5rem;

  strong {
    font-weight: 600;
    color: ${(props) => props.theme["gray-100"]};
    white-space: nowrap;
  }

  .count {
    font-size: 0.8rem;
    color: ${(props) => props.theme["gray-400"]};
    font-weight: 400;
    white-space: nowrap;
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 0.5rem;
    padding-left: 0.875rem;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.25rem;
    padding-left: 0.5rem;
    gap: 0.5rem;
  }
`;

export const GroupedActionCell = styled.td`
  text-align: center;
  vertical-align: middle;
  padding: 1.25rem;
  padding-right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.875rem 0.5rem;
    padding-right: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.25rem;
    padding-right: 0.5rem;
  }
`;

interface ExpandIconProps {
  isExpanded: boolean;
}

export const ExpandIcon = styled.button<ExpandIconProps>`
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme["gray-400"]};
  transition:
    transform 0.2s ease-in-out,
    color 0.2s ease-in-out;
  transform: ${(props) =>
    props.isExpanded ? "rotate(180deg)" : "rotate(0deg)"};

  &:hover {
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const DetailsRow = styled.tr`
  background-color: ${(props) => props.theme["gray-600"]} !important;
  opacity: 0.9;

  td {
    padding: 1.25rem !important;
    text-align: center !important;
    vertical-align: middle !important;
    white-space: nowrap;
    font-size: 0.875rem;

    @media (max-width: 768px) {
      padding: 0.875rem 0.5rem !important;
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      padding: 0.5rem 0.25rem !important;
      font-size: 0.75rem;
    }
    
    &:first-child {
      text-align: left !important;
      padding-left: 3.5rem !important;
      white-space: normal;
    }
    
    &:nth-child(2) {
      padding-left: 0 !important;
      padding-right: 0 !important;
      text-align: center !important;
    }
    
    &:nth-child(3),
    &:nth-child(4) {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    
    &:nth-child(5) {
      padding-left: 0 !important;
      padding-right: 1.5rem !important;
      text-align: center !important;
    }
  }
  
  td div {
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    @media (max-width: 480px) {
      gap: 0.125rem !important;
    }
  }
`;

export const DurationInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
`;

export const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
  font-size: 0.875rem;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const ActionButton = styled.button`
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};
  border: 0;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  font-size: 0.875rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0.4rem;
    border-radius: 3px;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
    border-radius: 2px;
    svg {
      width: 14px;
      height: 14px;
    }
  }

  &:hover {
    background: ${(props) => props.theme["green-700"]};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 135, 95, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 135, 95, 0.2);
  }
`;

const STATUS_COLORS = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  font-size: 0.875rem;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    gap: 0.25rem;
  }

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    flex-shrink: 0;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1rem;
  background: ${(props) => props.theme["gray-700"]};
  border-radius: 8px;
  font-weight: 500;
  color: ${(props) => props.theme["gray-100"]};

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-top: 1rem;
    padding: 0.875rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-top: 0.75rem;
    padding: 0.75rem;
    font-size: 0.8rem;
    border-radius: 4px;
  }

  span {
    font-size: 0.95rem;

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }
`;

export const PaginationButton = styled.button`
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.6rem;
    font-size: 0.75rem;
    border-radius: 3px;
  }

  &:hover:not(:disabled) {
    background: ${(props) => props.theme["green-700"]};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 135, 95, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 135, 95, 0.2);
  }

  &:disabled {
    background: ${(props) => props.theme["gray-600"]};
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const DeleteButton = styled.button`
  background: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme["gray-100"]};
  border: 0;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  font-size: 0.875rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0.4rem;
    border-radius: 3px;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
    border-radius: 2px;
    svg {
      width: 14px;
      height: 14px;
    }
  }

  &:hover {
    background: ${(props) => props.theme["red-700"]};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(239, 68, 68, 0.2);
  }
`;

export const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme["gray-300"]};
  text-align: center;
  white-space: nowrap;

  div {
    text-align: center;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    gap: 0.125rem;
  }
`;

export const SingleTaskRow = styled.tr`
  td {
    text-align: center !important;
    vertical-align: middle !important;
    padding: 1.25rem !important;
    white-space: nowrap;
    font-size: 0.875rem;
    
    @media (max-width: 768px) {
      padding: 0.875rem 0.5rem !important;
      font-size: 0.8rem;
    }
    
    @media (max-width: 480px) {
      padding: 0.5rem 0.25rem !important;
      font-size: 0.75rem;
    }
    
    &:first-child {
      text-align: left !important;
      padding-left: 1.5rem !important;
      white-space: normal;
      
      @media (max-width: 768px) {
        padding-left: 0.875rem !important;
      }
      
      @media (max-width: 480px) {
        padding-left: 0.5rem !important;
      }
    }
  }
  
  td div {
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    @media (max-width: 480px) {
      gap: 0.125rem !important;
    }
  }
`;
