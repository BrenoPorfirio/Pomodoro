import styled from "styled-components";

export const FormContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  padding: 1rem;
  background: ${(props) => props.theme["gray-700"]};
  border-radius: 8px;

  @media (max-width: 1024px) {
    gap: 0.5rem;
    font-size: 1rem;
    padding: 0.75rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    font-size: 0.95rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
    font-size: 0.875rem;
    padding: 0.75rem;
    border-radius: 6px;
  }
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0.5rem 0.5rem;
  color: ${(props) => props.theme["gray-100"]};
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1rem;
    height: 2.25rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    height: 2rem;
    padding: 0.4rem 0.4rem;
  }

  &:focus {
    box-shadow: 0 2px 8px rgba(0, 135, 95, 0.2);
    border-color: ${(props) => props.theme["green-500"]};
    background: rgba(0, 135, 95, 0.05);
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
  min-width: 10rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 5rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 4.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
