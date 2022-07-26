import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { rickAndMortyClient } from "../services";

interface IChildren {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: IChildren) => {
  return (
    <ApolloProvider client={rickAndMortyClient}>{children}</ApolloProvider>
  );
};
