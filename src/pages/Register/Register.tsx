import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import logo from "../../assets/img/favorites-logo.png";
import { GeneralButton, Input } from "../../components";
import { useClient } from "../../contexts";
import { createUser } from "../../gql";
import { Link } from "../../styles";
import {
  Footer,
  FormBody,
  Header,
  Image,
  Main,
  RegisterForm,
  Section,
  Text,
  Title,
  TopContainer,
} from "./styles";

export const Register = () => {
  const navigate = useNavigate();

  const registerSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Verifique o email"),
    confirmEmail: yup
      .string()
      .required("Confirmar email é obrigatório")
      .email("Verifique o email")
      .oneOf([yup.ref("email")], "Emails devem ser iguais"),
    password: yup.string().required("Senha é obrigatório"),
    confirmPassword: yup
      .string()
      .required("Confirmar senha é obrigatório")
      .oneOf([yup.ref("password")], "Senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const { mutation } = useClient("fav");

  const [mutateFunction, { data, error, loading }] = mutation(createUser);

  const onSubmitForm = (formData: any) => {
    mutateFunction({
      variables: {
        email: formData.email,
        name: formData.name,
        password: formData.password,
      },
    });
  };

  useEffect(() => {
    if (data) {
      toast.success(
        "Você se cadastrou com sucesso e será redirecionado para o login."
      );

      setTimeout(() => navigate("/login"), 5000);
    } else if (error) {
      toast.error("Erro ao cadastrar, tente novamente.");
    }
  }, [loading]);

  return (
    <Main>
      <Section>
        <TopContainer>
          <Image src={logo} />

          <Link to="/">
            <GeneralButton>Voltar</GeneralButton>
          </Link>
        </TopContainer>

        <RegisterForm onSubmit={handleSubmit(onSubmitForm)}>
          <Header>
            <Title>Cadastrar</Title>
          </Header>

          <FormBody>
            <Input
              label="Nome"
              helper="Jhon Doe"
              error={errors && errors.name?.message}
              placeholder="Digite seu nome"
              {...register("name")}
            />

            <Input
              label="Email"
              helper="exemplo: jhon.doe@email.com"
              error={errors && errors.email?.message}
              placeholder="Diginte o seu email"
              {...register("email")}
            />

            <Input
              label="Confirmar email"
              error={errors && errors.confirmEmail?.message}
              placeholder="Confirme o seu email"
              {...register("confirmEmail")}
            />

            <Input
              label="Senha"
              helper="134679$%Doe"
              error={errors && errors.password?.message}
              placeholder="Digite sua senha"
              type="password"
              {...register("password")}
            />

            <Input
              label="Confirmar senha"
              error={errors && errors.confirmPassword?.message}
              placeholder="Confirme sua senha"
              type="password"
              {...register("confirmPassword")}
            />
          </FormBody>

          <Footer>
            <GeneralButton type="submit">Enviar!</GeneralButton>

            <Text>Já possui uma conta?</Text>
            <Link to="/login">
              <GeneralButton type="button">Fazer Login!</GeneralButton>
            </Link>
          </Footer>
        </RegisterForm>
      </Section>
    </Main>
  );
};
