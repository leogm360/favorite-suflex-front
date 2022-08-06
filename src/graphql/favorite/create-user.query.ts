import { gql } from "@apollo/client";

export const createUser = gql`
  mutation ($email: String!, $name: String!, $password: String!) {
    createUser(
      createUserInput: { email: $email, name: $name, password: $password }
    ) {
      id
      email
      name
      favorites {
        id
        name
      }
      lastLogin
      updatedAt
      createdAt
    }
  }
`;
