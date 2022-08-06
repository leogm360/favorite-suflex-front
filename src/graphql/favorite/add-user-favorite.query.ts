import { gql } from "@apollo/client";

export const addUserFavorite = gql`
  mutation (
    $name: String!
    $status: String!
    $species: String!
    $type: String!
    $gender: String!
    $origin: OriginInput!
    $location: LocationInput!
    $image: String!
    $episodes: [String!]!
    $created: String!
    $userId: String!
  ) {
    addFavorite(
      addUserFavoriteInputs: {
        name: $name
        status: $status
        species: $species
        type: $type
        gender: $gender
        origin: $origin
        location: $location
        image: $image
        episodes: $episodes
        created: $created
        userId: $userId
      }
    ) {
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
