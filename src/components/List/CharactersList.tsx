import { GenericContainer } from "../../styles";
import { CharacterCard } from "../Cards/CharacterCard";
import { List } from "./styles";

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  origin: {
    id: number;
    name: string;
  };
  location: {
    id: number;
    name: string;
  };
  image: string;
  episode: {
    id: number;
  };
  gender: string;
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
