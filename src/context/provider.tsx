import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
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

      {children}
    </ApolloProvider>
  );
};
