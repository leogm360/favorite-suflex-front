import { gql } from "@apollo/client";

export const getCharacters = gql`
  query Characters($page: Int!, $species: String) {
    characters(page: $page, filter: { species: $species }) {
      info {
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
        }
        location {
          id
          name
        }
        image
        episode {
          id
        }
        created
      }
    }
  }
`;
