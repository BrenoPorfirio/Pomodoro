import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${(props) => props.theme["gray-700"]};
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
      gap: 0.25rem;
    }
  }

  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme["gray-100"]};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-radius: 4px;
    position: relative;

    @media (max-width: 480px) {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 0.875rem;
    }

    &:hover {
      background-color: ${(props) => props.theme["gray-700"]};
      border-bottom: 3px solid ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["green-500"]};
    }

    &.active {
      color: ${(props) => props.theme["green-500"]};
      border-bottom: 3px solid ${(props) => props.theme["green-500"]};
    }
  }
`;
