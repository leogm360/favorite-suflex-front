import { useState } from "react";
import { useAuth, useData } from "../../../contexts";
import { IconButton } from "../../Buttons/IconButton/IconButton";
import { Menu, MenuItem, MenuList, Link, UserName, Text } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const MenuMobile = () => {
  const { logout, isAuth } = useAuth();

  const { user } = useData();

  const [isOpen, setIsOpen] = useState(false);

  const openAndCloseModal = () => setIsOpen((state) => !state);

  return (
    <>
      <IconButton type="button" onClick={() => openAndCloseModal()}>
        {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </IconButton>

      {isOpen && (
        <Menu>
          <MenuList>
            {isAuth && (
              <>
                <UserName>{user?.name}</UserName>
                <MenuItem>
                  <Link to="/favorites">Favoritos</Link>
                </MenuItem>
                <MenuItem>
                  <Text onClick={() => logout()}>Sair</Text>
                </MenuItem>
              </>
            )}

            {!isAuth && (
              <>
                <MenuItem>
                  <Link to="/">Landing</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/login">Login</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/register">Cadastrar</Link>
                </MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      )}
    </>
  );
};
