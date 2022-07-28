import logo from "../../assets/img/landing-logo.png";
import { GeneralButton } from "../../components";
import { Link } from "../../styles";
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
            <Link to="/login">
              <GeneralButton>Login</GeneralButton>
            </Link>

            <Link to="/register">
              <GeneralButton>Cadastrar</GeneralButton>
            </Link>

            <Link to="/home">
              <GeneralButton>Personagens</GeneralButton>
            </Link>
          </ButtonsContainer>
        </Main>
      </InnerContainer>
    </OuterContainer>
  );
};
