import { useMutation } from "@apollo/client";
import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUser, loginUser } from "../../graphql";

interface IFormData {
  email?: string;
  name?: string;
  password?: string;
}

interface IAuthProvider {
  children: ReactNode;
}

interface IAuthContext {
  token: string;
  isAuth: boolean;
  login: (formData: IFormData) => void;
  logout: () => void;
  registerUser: (formData: IFormData) => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();

  const localToken = localStorage.getItem("@token:fav");

  const [token, setToken] = useState(localToken ? localToken : "");

  const [isAuth, setIsAuth] = useState(token || localToken ? true : false);

  const [loginUserMutation] = useMutation(loginUser);

  const [registerUserMutation] = useMutation(createUser);

  const login = (formData: IFormData) => {
    console.log(formData);
    loginUserMutation({
      variables: {
        email: formData.email,
        password: formData.password,
      },
      onCompleted: (data) => {
        localStorage.setItem("@token:fav", data.login.token);

        setToken(data.login.token);

        setIsAuth(true);

        toast.success("Login efetuado com sucesso.", { theme: "dark" });

        navigate("/home");
      },
      onError: () =>
        toast.error("Email ou senha inválidos.", { theme: "dark" }),
    });
  };

  const logout = () => {
    localStorage.clear();

    setToken("");

    setIsAuth(false);
  };

  const registerUser = (formData: IFormData) => {
    registerUserMutation({
      variables: {
        email: formData.email,
        name: formData.name,
        password: formData.password,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{ token, isAuth, login, logout, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
