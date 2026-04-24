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
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;
      font-weight: 600;
      position: sticky;
      top: 0;
      z-index: 10;
      border-bottom: 2px solid ${(props) => props.theme["gray-500"]};

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
        padding-left: 1.5rem;

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

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
