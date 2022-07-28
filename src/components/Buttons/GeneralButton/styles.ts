import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-weight: bold;
  font-size: 0.85rem;
  background: var(--color-secondary);
  color: var(--color-tertiary);
  border: 2.5px solid var(--color-tertiary);
  border-radius: 5px;
  padding: 0.6rem 2rem;

  :hover {
    filter: brightness(120%);
  }

  :active{
    filter: brightness(90%);
  }
  }
`;
