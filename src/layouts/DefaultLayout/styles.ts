import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  min-height: calc(100vh - 10rem);
  margin: 2.5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    max-width: 90%;
    margin: 2rem auto;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    max-width: 95%;
    margin: 1.5rem auto;
    padding: 1.5rem;
    min-height: auto;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 0;
  }
`;
