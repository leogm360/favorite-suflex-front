import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font: var(--body-text);
`;

export const InputField = styled.input`
  background: var(--grey-0);
  border-radius: 5px;
  border: 2px solid transparent;
  height: 40px;
  padding: 0 0.5rem;

  :focus {
    outline: none;
    border: 2.5px solid var(--color-tertiary);
  }
`;

export const HelperText = styled.p`
  font: var(--helper-text);
  margin-top: 0.5rem;
`;
