import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-tertiary);

  @media only screen and (min-width: 1024px) {
    min-height: 100vh;
    padding: 0rem;
  }
`;

export const Section = styled.section``;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Image = styled.img`
  width: 150px;
  height: auto;
`;

export const LoginForm = styled.form`
  background: var(--color-primary);
  border: 2.5px;
  border-radius: 5px;
  width: 300px;
  padding: 1rem;
  box-shadow: 0px 16.6px 30.1px rgba(0, 0, 0, 0.037),
    0px 43px 240px rgba(0, 0, 0, 0.07);

  @media only screen and (min-width: 1024px) {
    width: 350px;
  }
`;

export const Header = styled.header`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font: var(--title-4);
  color: var(--color-tertiary);
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
`;

export const FormBody = styled.div`
  div + div {
    margin-top: 1.5rem;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  margin-top: 1.5rem;
`;

export const Text = styled.p`
  font: var(--body-text);
  margin-bottom: 25px;
`;
