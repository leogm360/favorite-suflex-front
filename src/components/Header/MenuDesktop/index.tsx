import { useAuth, useData } from "../../../contexts";
import { Link, Menu, MenuItem, MenuList, Text, UserName } from "./styles";

export const MenuDesktop = () => {
  const { isAuth, logout } = useAuth();

  const { user } = useData();

  return (
    <>
      {isAuth && (
        <Menu>
          <UserName>{user?.name}</UserName>

          <MenuList>
            <MenuItem>
              <Link to="/favorites">Favoritos</Link>
            </MenuItem>
            <MenuItem>
              <Text onClick={() => logout()}>Sair</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      )}

      {!isAuth && (
        <Menu>
          <MenuList>
            <MenuItem>
              <Link to="/">Landing</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/login">Login</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/register">Cadastro</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
};
