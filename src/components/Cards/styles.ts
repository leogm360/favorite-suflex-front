import styled from "styled-components";

interface IProps {
  readonly status: string;
  readonly isOpen?: boolean;
}

export const Container = styled.li<IProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ status }) => {
    if (status === "Alive") {
      return "#0eff00";
    } else if (status === "Dead") {
      return "#d62929";
    } else {
      return "var(--grey-1)";
    }
  }};
  border-radius: 5px;
  width: 100%;
  max-width: 230px;
  padding: 1rem;
  gap: 1.5rem;
  cursor: pointer;
`;

export const Image = styled.img<IProps>`
  display: block;
  margin: 0 auto;
  border: ${({ status }) => {
    if (status === "Alive") {
      return "5px solid #0a5d00";
    } else if (status === "Dead") {
      return "5px solid #800000";
    } else {
      return "5px solid var(--grey-2)";
    }
  }};
  border-radius: 100%;
  width: 100%;
  max-width: 200px;
`;

export const Name = styled.p<IProps>`
  font: var(--title-2);
  text-align: center;
  color: ${({ status }) => {
    if (status === "Alive") {
      return "#0a5d00";
    } else if (status === "Dead") {
      return "#800000";
    } else {
      return "var(--grey-2)";
    }
  }};
`;

export const ButtonsCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    font-size: 1.5rem;
  }
`;

export const Info = styled.div<IProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ status }) => {
    if (status === "Alive") {
      return "#0a5d00";
    } else if (status === "Dead") {
      return "#800000";
    } else {
      return "var(--grey-2)";
    }
  }};
  border-radius: 5px;
  opacity: 0.85;
  transition: 0.5s ease-in-out;
  padding: 1rem;

  p + p {
    margin-top: 10px;
  }
`;

export const ButtonsCloseContainer = styled.div`
  margin-bottom: 1rem;

  button {
    margin-left: auto;
    font-size: 0.85rem;
  }
`;

export const Text = styled.p`
  letter-spacing: 0.05rem;
  line-height: 1.25rem;
  font-weight: bold;
`;

export const TextRight = styled.span`
  color: var(--color-secondary);
`;

export const TextLeft = styled.span`
  color: var(--color-primary);
`;
