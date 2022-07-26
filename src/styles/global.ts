import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Poppins';
        color: var(--grey-4);
    }

    button{
      cursor: pointer;
    }

    .lg-container {
      width: 100%;
      max-width: 1200px;
    }

    .flex{
      display: flex;
    }

    .flex-col{
      flex-direction: column;
    }

`;
