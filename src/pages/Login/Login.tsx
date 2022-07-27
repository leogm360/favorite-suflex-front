import logo from "../../assets/img/favorites-logo.png";
import { GeneralButton, Input } from "../../components";
import { Link } from "../../styles";
import {
  Footer,
  FormBody,
  Header,
  Image,
  LoginForm,
  Main,
  Section,
  Text,
  Title,
  TopContainer,
} from "./styles";

export const Login = () => {
  return (
    <Main>
      <Section>
        <TopContainer>
          <Image src={logo} />

          <Link to="/">
            <GeneralButton>Voltar</GeneralButton>
          </Link>
        </TopContainer>

        <LoginForm action="">
          <Header>
            <Title>Login</Title>
          </Header>
          <FormBody>
            <Input label="Email" helper="exemplo: nome@email.com" />

            <Input label="Senha" helper="exemplo: 134679$%Test" />
          </FormBody>
          <Footer>
            <Text>Ainda não tem cadastro?</Text>

            <Link to="/register">
              <GeneralButton>Cadastrar!</GeneralButton>
            </Link>
          </Footer>
        </LoginForm>
      </Section>
    </Main>
  );
};
