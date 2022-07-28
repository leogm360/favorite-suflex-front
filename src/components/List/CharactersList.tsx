import { GenericContainer } from "../../styles";
import { CharacterCard } from "../Cards/CharacterCard";
import { List } from "./styles";

interface IEpisode {
  id: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  origin: {
    id: string;
    name: string;
  };
  location: {
    id: string;
    name: string;
  };
  image: string;
  episode: IEpisode[];
  gender: string;
  url: string;
  created: string;
}

interface ICharacterList {
  characters: ICharacter[];
}

export const CharactersList = ({ characters }: ICharacterList) => {
  return (
    <GenericContainer>
      <List>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </List>
    </GenericContainer>
  );
};
