import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Menu = styled.nav`
  position: absolute;
  background: var(--color-primary);
  padding: 1rem;
  border-radius: 5px;
  transform: translate(-10rem, 0.65rem);
  z-index: 1;
  width: 225px;
`;

export const UserName = styled.h2`
  color: var(--color-tertiary);
  margin-bottom: 15px;
`;

export const MenuList = styled.ul`
  li + li {
    padding-top: 1rem;
  }
`;

export const MenuItem = styled.li`
  color: var(--color-secondary);
`;

export const Text = styled.span`
  color: var(--color-secondary);
  cursor: pointer;
`;

export const Link = styled(RouterLink)`
  color: var(--color-secondary);
`;
