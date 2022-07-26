import styled from "styled-components";

import portalBg from "../../assets/img/portal-bg.jpg";

export const OuterContainer = styled.div`
  background-image: url(${portalBg});
  background-position: center;
  background-size: cover;
`;

export const InnerContainer = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  gap: 4rem;
`;

export const InfoContainer = styled.div`
  text-align: center;
  width: 100%;
  max-width: 320px;
`;

export const Image = styled.img`
  width: 150px;
  height: auto;
`;

export const Title = styled.h1`
  font-size: 1.35rem;
  color: var(--color-primary);
  text-shadow: 2px 2px 0 var(--color-tertiary), 2px -2px 0 var(--color-tertiary),
    -2px 2px 0 var(--color-tertiary), -2px -2px 0 var(--color-tertiary),
    2px 0px 0 var(--color-tertiary), 0px 2px 0 var(--color-tertiary),
    -2px 0px 0 var(--color-tertiary), 0px -2px 0 var(--color-tertiary);
  margin-bottom: 1.25rem;
`;

export const Text = styled.p`
  letter-spacing: 0.1rem;
  color: var(--color-primary);
  text-shadow: 2px 2px 0 var(--color-tertiary), 2px -2px 0 var(--color-tertiary),
    -2px 2px 0 var(--color-tertiary), -2px -2px 0 var(--color-tertiary),
    2px 0px 0 var(--color-tertiary), 0px 2px 0 var(--color-tertiary),
    -2px 0px 0 var(--color-tertiary), 0px -2px 0 var(--color-tertiary);
`;

export const ButtonsContainer = styled.div`
  button + button {
    margin-left: 2rem;
  }
`;
