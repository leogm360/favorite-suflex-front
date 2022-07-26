import { useQuery } from "@apollo/client";
import { getCharacters } from "../querys";

export const Home = () => {
  const { loading, error, data } = useQuery(getCharacters, {
    variables: { page: 1, species: "Alien" },
  });

  return (
    <>
      <main></main>
    </>
  );
};
