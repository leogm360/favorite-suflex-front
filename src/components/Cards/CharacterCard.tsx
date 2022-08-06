import { useState } from "react";

import dateformat from "dateformat";
import {
  AiFillHeart,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineInfo,
} from "react-icons/ai";
import {
  ButtonsCardContainer,
  ButtonsCloseContainer,
  Container,
  Image,
  Info,
  Name,
  Text,
  TextLeft,
  TextRight,
} from "./styles";
import { useAuth, useData } from "../../contexts";
import { addUserFavorite } from "../../graphql";
import { IconButton } from "../Buttons/IconButton/IconButton";
import { ICharacter } from "../List/CharactersList";

interface ICharacterCard {
  character: ICharacter;
}

export const CharacterCard = ({ character }: ICharacterCard) => {
  const { isAuth } = useAuth();

  const { favorites, favoriteCharacter } = useData();

  const [isOpen, setIsOpen] = useState(false);

  const openAndCloseModal = () => setIsOpen((state) => !state);

  return (
    <Container status={character.status}>
      <Image status={character.status} src={character.image} />

      <Name status={character.status}>{character.name}</Name>

      <ButtonsCardContainer>
        <IconButton type="button" onClick={() => openAndCloseModal()}>
          <AiOutlineInfo />
        </IconButton>

        {isAuth && (
          <IconButton
            type="button"
            onClick={() => favoriteCharacter(character)}
          >
            {favorites.includes(character.name) ? (
              <AiFillHeart />
            ) : (
              <AiOutlineHeart />
            )}
          </IconButton>
        )}
      </ButtonsCardContainer>

      {isOpen && (
        <Info status={character.status}>
          <ButtonsCloseContainer>
            <IconButton type="button" onClick={() => openAndCloseModal()}>
              <AiOutlineClose />
            </IconButton>
          </ButtonsCloseContainer>
          <Text>
            <TextLeft>Nome: </TextLeft>
            <TextRight>{character.name}</TextRight>
          </Text>
          <Text>
            <TextLeft>Status: </TextLeft>
            <TextRight>{character.status}</TextRight>
          </Text>
          <Text>
            <TextLeft>Gênero: </TextLeft>
            <TextRight>{character.gender}</TextRight>
          </Text>
          <Text>
            <TextLeft>Espécie: </TextLeft>
            <TextRight>{character.species}</TextRight>
          </Text>
          <Text>
            <TextLeft>Quantidade de episódios: </TextLeft>
            <TextRight> {character.episode.length}</TextRight>
          </Text>
          <Text>
            <TextLeft>Criação: </TextLeft>
            <TextRight>
              {dateformat(new Date(character.created), "yyyy-m-d")}
            </TextRight>
          </Text>
        </Info>
      )}
    </Container>
  );
};
