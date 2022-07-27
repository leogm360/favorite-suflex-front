import { ApolloProvider } from "@apollo/client";
import { createContext, ReactNode, useState } from "react";
import { favoriteClient, rickAndMortyClient } from "../../services";

interface IClientProvider {
  children: ReactNode;
}

interface IClientContext {
  changeClient: (choosed: string) => void;
}

export const ClientContext = createContext<IClientContext>(
  {} as IClientContext
);

export const ClientProvider = ({ children }: IClientProvider) => {
  const [client, setClient] = useState(favoriteClient);

  const changeClient = (choosed: string) => {
    if (choosed === "fav") {
      setClient(favoriteClient);
    } else if (choosed === "rick") {
      setClient(rickAndMortyClient);
    } else {
      throw new Error("Value must be either user or rick");
    }
  };

  return (
    <ClientContext.Provider value={{ changeClient }}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ClientContext.Provider>
  );
};
