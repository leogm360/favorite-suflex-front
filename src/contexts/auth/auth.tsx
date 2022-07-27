import { createContext, ReactNode, useState } from "react";

interface IAuthProvider {
  children: ReactNode;
}

interface IAuthContext {
  token: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  // const secret = "6317d22a3c8fb9437f652a9d6196a455";

  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};
