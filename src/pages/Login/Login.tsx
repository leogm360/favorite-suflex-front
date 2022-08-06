import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import logo from "../../assets/img/favorites-logo.png";
import { GeneralButton, Input } from "../../components";
import { useAuth } from "../../contexts";
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

interface IFormData {
  email?: string;
  password?: string;
}

export const Login = () => {
  const { login } = useAuth();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email é obrigatório")
      .email(" Verifique o email"),
    password: yup.string().required("Senha é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmitForm = (formData: IFormData) => login(formData);

  return (
    <Main>
      <Section>
        <TopContainer>
          <Image src={logo} />

          <Link to="/">
            <GeneralButton>Voltar</GeneralButton>
          </Link>
        </TopContainer>

        <LoginForm onSubmit={handleSubmit(onSubmitForm)}>
          <Header>
            <Title>Login</Title>
          </Header>
          <FormBody>
            <Input
              label="Email"
              helper=" jhon.doe@email.com"
              error={errors && errors.email?.message}
              placeholder="Digite o seu email"
              {...register("email")}
            />

            <Input
              label="Senha"
              helper="exemplo: 197328$%Doe"
              error={errors && errors.password?.message}
              type="password"
              placeholder="Digite a sua senha"
              {...register("password")}
            />
          </FormBody>
          <Footer>
            <GeneralButton type="submit">Enviar!</GeneralButton>

            <Text>Ainda não tem cadastro?</Text>

            <Link to="/register">
              <GeneralButton type="button">Cadastrar!</GeneralButton>
            </Link>
          </Footer>
        </LoginForm>
      </Section>
    </Main>
  );
};
