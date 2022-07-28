import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import headerLogo from "../../assets/img/favorites-logo.png";
import { GenericContainer, Link } from "../../styles";
import { IconButton } from "../Buttons/IconButton/IconButton";
import {
  HeaderContainer,
  Logo,
  Menu,
  MenuContainer,
  MenuItem,
  MenuList,
} from "./styles";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openAndCloseModal = () => setIsOpen((state) => !state);

  return (
    <HeaderContainer>
      <GenericContainer>
        <Logo src={headerLogo} />

        <MenuContainer>
          <IconButton type="button" onClick={() => openAndCloseModal()}>
            <GiHamburgerMenu />
          </IconButton>

          {isOpen && (
            <Menu>
              <MenuList>
                <MenuItem>
                  <Link to="/">Landing</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/login">Login</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/register">Cadastrar</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/favorites">Favoritos</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </MenuContainer>
      </GenericContainer>
    </HeaderContainer>
  );
};
