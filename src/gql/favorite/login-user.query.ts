import { gql } from "@apollo/client";

export const loginUser = gql`
  mutation ($email: String!, $password: String!) {
    login(loginUserInput: { email: $email, password: $password }) {
      token
    }
  }
`;
