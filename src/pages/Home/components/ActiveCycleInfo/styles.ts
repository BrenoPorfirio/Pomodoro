import styled from "styled-components";

export const ActiveCycleInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
  background: ${(props) => props.theme["gray-700"]};
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 30rem;

  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
    margin-bottom: 1.5rem;
    max-width: 25rem;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 1rem;
    max-width: 100%;
    border-radius: 4px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
  }
`;

export const TaskName = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme["green-500"]};
  font-weight: 600;
  margin: 0;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const TaskDuration = styled.p`
  font-size: 0.95rem;
  color: ${(props) => props.theme["gray-300"]};
  font-weight: 500;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
