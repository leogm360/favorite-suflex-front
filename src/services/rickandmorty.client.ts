import { ApolloClient, InMemoryCache } from "@apollo/client";

export const rickAndMortyClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});
