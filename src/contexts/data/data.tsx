import { useQuery } from "@apollo/client";
import jwtDecoder from "jwt-decode";
import { createContext, memo, ReactNode, useState } from "react";
import { retrieveUser } from "../../gql/favorite/retrieve-user.query";
import { useAuth } from "../auth/useAuth";

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
  user: IUser;
  setUserData: (data: IUser) => void;
}

export const DataContext = createContext<IDataContext>({} as IDataContext);

export const DataProvider = memo(({ children }: IDataProvider) => {
  const { token } = useAuth();

  const decoded: IDecoded = token ? jwtDecoder(token) : ({} as IDecoded);

  const [user, setUser] = useState<IUser>({} as IUser);

  useQuery(retrieveUser, {
    variables: { id: decoded?.userId },
    onCompleted: (data) => {
      setUser(data.user);
    },
  });

  const setUserData = (data: IUser) => {
    setUser((state) => ({ ...state, ...data }));
  };

  return (
    <DataContext.Provider value={{ user, setUserData }}>
      {children}
    </DataContext.Provider>
  );
});
