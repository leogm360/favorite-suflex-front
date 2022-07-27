import logo from "../../assets/img/favorites-logo.png";
import { GeneralButton, Input } from "../../components";
import { Link } from "../../styles";
import {
  Footer,
  FormBody,
  Header,
  Image,
  Main,
  RegisterForm,
  Text,
  Title,
} from "./styles";

export const Register = () => {
  return (
    <Main>
      <Image src={logo} />

      <RegisterForm>
        <Header>
          <Title>Register</Title>
        </Header>

        <FormBody>
          <Input label="Nome" helper="Jhon Doe" placeholder="Digite seu nome" />

          <Input
            label="Email"
            helper="exemplo: jhon.doe@email.com"
            placeholder="Diginte o seu email"
          />

          <Input label="Confirmar email" placeholder="Confirme o seu email" />

          <Input
            label="Senha"
            helper="134679$%Doe"
            placeholder="Digite sua senha"
          />

          <Input label="Confirmar senha" placeholder="Confirme sua senha" />
        </FormBody>

        <Footer>
          <Text>Já possui uma conta?</Text>
          <Link to="/login">
            <GeneralButton>Fazer Login!</GeneralButton>
          </Link>
        </Footer>
      </RegisterForm>
    </Main>
  );
};
