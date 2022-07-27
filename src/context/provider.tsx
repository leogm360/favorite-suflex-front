import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { rickAndMortyClient } from "../services";
import { GlobalStyles, ResetStyles, RootStyles } from "../styles";

interface IChildren {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: IChildren) => {
  return (
    <ApolloProvider client={rickAndMortyClient}>
      <ResetStyles />
      <RootStyles />
      <GlobalStyles />

      <ToastContainer style={{ padding: "1rem" }} />

      {children}
    </ApolloProvider>
  );
};
