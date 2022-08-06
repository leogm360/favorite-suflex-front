import headerLogo from "../../assets/img/favorites-logo.png";
import { GenericContainer } from "../../styles";
import { HeaderContainer, Logo, MenusContainer } from "./styles";
import { MenuMobile } from "./MenuMobile";
import { MenuDesktop } from "./MenuDesktop";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <HeaderContainer>
      <GenericContainer>
        <Logo src={headerLogo} />

        <MenusContainer>
          {isMobile && <MenuMobile />}
          {isDesktop && <MenuDesktop />}
        </MenusContainer>
      </GenericContainer>
    </HeaderContainer>
  );
};
