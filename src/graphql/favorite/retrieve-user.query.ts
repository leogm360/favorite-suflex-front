import { gql } from "@apollo/client";

export const retrieveUser = gql`
  query ($id: String!) {
    user(id: $id) {
      id
      name
      favorites {
        id
        name
        status
        species
        type
        gender
        origin {
          name
          url
        }
        location {
          name
          url
        }
        image
        episodes {
          url
        }
        created
      }
    }
  }
`;
