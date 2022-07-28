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

export const MenuContainer = styled.div`
  position: relative;
  padding-right: 2rem;

  & > button {
    font-size: 1.5rem;
  }
`;

export const Menu = styled.nav`
  position: absolute;
  background: var(--color-primary);
  padding: 1rem;
  border-radius: 5px;
  transform: translate(-2rem, 1rem);
  z-index: 1;
`;

export const MenuList = styled.ul`
  li + li {
    padding-top: 1rem;
  }
`;

export const MenuItem = styled.li`
  color: var(--color-secondary);
`;
