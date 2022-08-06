import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px 0;
`;

export const UserName = styled.h2`
  color: var(--color-secondary);
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 0 15px;
`;

export const MenuItem = styled.li``;

export const Text = styled.span`
  color: var(--color-primary);
  cursor: pointer;

  :hover {
    color: var(--color-secondary);
  }
`;

export const Link = styled(RouterLink)`
  color: var(--color-primary);

  :hover {
    color: var(--color-secondary);
  }
`;
