import jwtDecoder from "jwt-decode";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { createContext, ReactNode, useState } from "react";
import { retrieveUser } from "../../graphql/favorite/retrieve-user.query";
import { useAuth } from "../auth/useAuth";
import { ICharacter } from "../../components/List/CharactersList";
import { addUserFavorite } from "../../graphql";
import { toast } from "react-toastify";

interface IDecoded {
  userId: string;
  sub: string;
  iat: number;
}

interface IDataProvider {
  children: ReactNode;
}

interface IFavorite {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episodes: string[];
  url: string;
  created: string;
}

interface IUser {
  id: string;
  name: string;
  favorites: IFavorite[];
  __typename?: string;
}

interface IDataContext {
  user: IUser | undefined;
  favorites: string[];
  favoriteCharacter: (character: ICharacter) => void;
}

export const DataContext = createContext<IDataContext>({} as IDataContext);

export const DataProvider = ({ children }: IDataProvider) => {
  const [addToFavorite] = useMutation(addUserFavorite);

  const { token } = useAuth();

  const decoded: IDecoded | undefined = token ? jwtDecoder(token) : undefined;

  const [user, setUser] = useState<IUser | undefined>(undefined);

  const { refetch } = useQuery(retrieveUser, {
    variables: { id: decoded?.userId },
    onCompleted: (data) => {
      setUser(data.user);
    },
  });

  let favorites = !!user ? user.favorites.map(({ name }) => name) : [];

  const favoriteCharacter = (character: ICharacter) => {
    const origin = {
      originName: character.origin.name,
      originUrl: character.origin.id
        ? `https://rickandmortyapi.com/api/location/${character.origin.id}`
        : "",
    };

    const location = {
      locationName: character.location.name,
      locationUrl: character.location.id
        ? `https://rickandmortyapi.com/api/location/${character.location.id}`
        : "",
    };

    const episodes =
      character.episode.length > 0
        ? character.episode.map(({ id }) => {
            return `https://rickandmortyapi.com/api/episode/${id}`;
          })
        : [];

    addToFavorite({
      variables: {
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        gender: character.gender,
        origin,
        location,
        image: character.image,
        episodes,
        created: character.created,
        userId: user?.id,
      },
      onCompleted: (data) => {
        refetch();

        toast.success("Personagem favoritado.", { theme: "dark" });
      },
      onError: () =>
        toast.success("Erro ao favoritarm, tente novamente.", {
          theme: "dark",
        }),
    });
  };

  return (
    <DataContext.Provider value={{ user, favorites, favoriteCharacter }}>
      {children}
    </DataContext.Provider>
  );
};
