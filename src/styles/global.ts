import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        scroll-behavior: smooth;

        @media (max-width: 768px) {
            font-size: 14px;
        }

        @media (max-width: 480px) {
            font-size: 13px;
        }
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
        transition: box-shadow 0.2s ease-in-out;
    }

    body {
        background: ${(props) => props.theme["gray-900"]};
        color: ${(props) => props.theme["gray-300"]};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5;
    }

    button {
        transition: all 0.2s ease-in-out;
    }

    a {
        text-decoration: none;
        transition: all 0.2s ease-in-out;
    }
`;
