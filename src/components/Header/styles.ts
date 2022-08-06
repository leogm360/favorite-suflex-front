import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  padding: 0.5rem 1rem;
  background: var(--color-tertiary);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  border-radius: 100%;
  height: 60px;
`;

export const MenusContainer = styled.div`
  position: relative;
  padding-right: 2rem;

  & > button {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    padding-right: 0;
  }
`;
