import { ApolloClient, InMemoryCache } from "@apollo/client";

export const favoriteClient = new ApolloClient({
  uri: "https://favorite-suflex.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
