import { Link as ReactRouterLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Poppins';
        color: var(--grey-4);
    }

    button{
      cursor: pointer;
    }
`;

export const GenericContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Link = styled(ReactRouterLink)`
  color: inherit;

  :visited {
    color: inherit;
  }
`;
