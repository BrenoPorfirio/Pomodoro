import styled from "styled-components";

export const CounterdownContainer = styled.main`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    min-width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  @media (max-width: 1024px) {
    font-size: 8rem;
    line-height: 6rem;
    gap: 0.75rem;

    span {
      padding: 1.5rem 0.75rem;
      min-width: 5rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    line-height: 4rem;
    gap: 0.5rem;

    span {
      padding: 1rem 0.5rem;
      min-width: 3.5rem;
      border-radius: 6px;
    }
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    line-height: 2.5rem;
    gap: 0.3rem;

    span {
      padding: 0.75rem 0.3rem;
      min-width: 2.5rem;
      font-size: 2.5rem;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["green-500"]};
  width: 4rem;
  height: 8rem;
  line-height: 8rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    width: 3rem;
    height: 6rem;
    line-height: 6rem;
    font-size: 8rem;
    padding: 1.5rem 0;
  }

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 5rem;
    padding: 0.75rem 0;
  }

  @media (max-width: 480px) {
    width: 1rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 2.5rem;
    padding: 0.5rem 0;
  }
`;
