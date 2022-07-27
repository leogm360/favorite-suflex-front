import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import headerLogo from "../../assets/img/favorites-logo.png";
import { GenericContainer } from "../../styles";
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
          <IconButton callback={openAndCloseModal}>
            <GiHamburgerMenu />
          </IconButton>

          {isOpen && (
            <Menu>
              <MenuList>
                <MenuItem>Login</MenuItem>
                <MenuItem>Cadastrar</MenuItem>
                <MenuItem>Landing</MenuItem>
                <MenuItem>Favoritos</MenuItem>
              </MenuList>
            </Menu>
          )}
        </MenuContainer>
      </GenericContainer>
    </HeaderContainer>
  );
};
