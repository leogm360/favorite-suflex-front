import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  background: #306572;
  padding: 2rem 1rem;
`;

export const ButtonsContainer = styled.div`
  position: sticky;
  bottom: 30%;
  display: flex;
  justify-content: space-between;
  padding: 5rem 0;
  pointer-events: none;

  button {
    font-size: 1rem;
    pointer-events: all;
  }

  @media only screen and (min-width: 1400px) {
    button {
      font-size: 2rem;
    }
  }
`;
