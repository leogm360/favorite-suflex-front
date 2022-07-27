import dateformat from "dateformat";
import { useState } from "react";
import { AiOutlineClose, AiOutlineHeart, AiOutlineInfo } from "react-icons/ai";
import { IconButton } from "../Buttons/IconButton/IconButton";
import { ICharacter } from "../List/CharactersList";
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

interface ICharacterCard {
  character: ICharacter;
}

export const CharacterCard = ({ character }: ICharacterCard) => {
  const [isOpen, seIsOpen] = useState(false);

  const openAndCloseModal = () => seIsOpen((state) => !state);

  return (
    <Container status={character.status}>
      <Image status={character.status} src={character.image} />

      <Name status={character.status}>{character.name}</Name>

      <ButtonsCardContainer>
        <IconButton callback={openAndCloseModal}>
          <AiOutlineInfo />
        </IconButton>

        <IconButton className="button__fav">
          <AiOutlineHeart />
        </IconButton>
      </ButtonsCardContainer>

      {isOpen && (
        <Info status={character.status}>
          <ButtonsCloseContainer>
            <IconButton callback={openAndCloseModal}>
              <AiOutlineClose />
            </IconButton>
          </ButtonsCloseContainer>
          <Text>
            <TextLeft>Nome:</TextLeft>
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
            <TextRight> {character.id}</TextRight>
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
