import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background: var(--color-secondary);
  color: var(--color-primary);
  border: 3px solid var(--color-primary);
  border-radius: 100%;
  padding: 0.5rem;

  svg {
    pointer-events: none;
  }

  @media only screen and (min-width: 1024px) {
    :hover {
      color: var(--color-tertiary);
      border: 3px solid var(--color-tertiary);
    }

    :active {
      filter: brightness(120%);
    }
  }
`;
