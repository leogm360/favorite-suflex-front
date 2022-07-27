import { useQuery } from "@apollo/client";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { toast } from "react-toastify";
import { CharactersList, Header, IconButton, Loader } from "../../components";
import { getCharacters } from "../../querys";
import { ButtonsContainer, Main } from "./styles";

export const Home = () => {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(getCharacters, {
    variables: { page },
  });

  const next = () => {
    if (!loading) {
      const next = data.characters.info.next;

      const nextPage = next ? page + 1 : page;

      if (next != nextPage) {
        toast.error("Não é possível avançar mais.");
      }

      setPage((state) => (nextPage ? state + 1 : state));
    }
  };

  const previous = () => {
    if (!loading) {
      const prev = data.characters.info.prev;

      const prevPage = prev ? page - 1 : page;

      if (prev != prevPage) {
        toast.error("Não é possível retornar mais.");
      }

      setPage(prevPage);
    }
  };

  return (
    <>
      <Header />

      <Main>
        {loading ? (
          <Loader />
        ) : (
          <>
            <CharactersList characters={data.characters.results} />

            <ButtonsContainer>
              <IconButton callback={previous}>
                <AiFillCaretLeft />
              </IconButton>

              <IconButton callback={next}>
                <AiFillCaretRight />
              </IconButton>
            </ButtonsContainer>
          </>
        )}
      </Main>
    </>
  );
};
