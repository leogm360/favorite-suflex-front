import { createContext, ReactNode, useState } from "react";

interface IAuthProvider {
  children: ReactNode;
}

interface IAuthContext {
  token: string;
  isAuth: boolean;
  setAuthToken: (tokenToSet: string) => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const localToken = localStorage.getItem("@token:fav");

  const [token, setToken] = useState(localToken ? localToken : "");
  const [isAuth, setIsAuth] = useState(token || localToken ? true : false);

  const setAuthToken = (tokenToSet: string) => {
    localStorage.setItem("@token:fav", tokenToSet);

    setToken(tokenToSet);
    setIsAuth((state) => !state);
  };

  return (
    <AuthContext.Provider value={{ token, setAuthToken, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
