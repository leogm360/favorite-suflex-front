import logo from "../../assets/img/logo-login.png";
import { GeneralButton, Input } from "../../components";
import {
  Footer,
  FormBody,
  Header,
  Image,
  LoginForm,
  Main,
  Text,
  Title,
} from "./styles";

export const Login = () => {
  return (
    <Main>
      <Image src={logo} />
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

          <GeneralButton>Cadastrar!</GeneralButton>
        </Footer>
      </LoginForm>
    </Main>
  );
};
