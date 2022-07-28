import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { favoriteClient } from "../services/favorite.client";
import { GlobalStyles, ResetStyles, RootStyles } from "../styles";
import { AuthProvider } from "./auth/auth";
import { DataProvider } from "./data/data";

interface IChildren {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: IChildren) => {
  return (
    <BrowserRouter>
      <ResetStyles />
      <RootStyles />
      <GlobalStyles />

      <ToastContainer style={{ padding: "1rem" }} />
      <ApolloProvider client={favoriteClient}>
        <AuthProvider>
          <DataProvider>{children}</DataProvider>
        </AuthProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
};
