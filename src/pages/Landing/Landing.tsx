import { GeneralButton } from "../../components";
import {
  ButtonsContainer,
  Image,
  InfoContainer,
  InnerContainer,
  Main,
  OuterContainer,
  Text,
  Title,
} from "./styles";

import logo from "../../assets/img/logo.png";

export const Landing = () => {
  return (
    <OuterContainer>
      <InnerContainer className="lg-container">
        <Main className="flex flex-col">
          <InfoContainer>
            <Image src={logo} />

            <Title className="">Rick and Morty Favorites</Title>

            <Text>
              Veja todos os personagens das aventuras de Rick and morty e
              escolha seus favoritos!
            </Text>
          </InfoContainer>

          <ButtonsContainer>
            <GeneralButton>Login</GeneralButton>

            <GeneralButton>Personagens</GeneralButton>
          </ButtonsContainer>
        </Main>
      </InnerContainer>
    </OuterContainer>
  );
};
