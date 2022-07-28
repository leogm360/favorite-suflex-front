import { useMutation } from "@apollo/client";
import dateformat from "dateformat";
import { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineInfo,
} from "react-icons/ai";
import { toast } from "react-toastify";
import { useData } from "../../contexts";
import { EPISODE_URL, ORIGIN_LOCATION_URL } from "../../global-vars";
import { addUserFavorite } from "../../gql";
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
  const { user, setUserData } = useData();

  const [mutateFunction] = useMutation(addUserFavorite);

  const [isFavorited, setIsFavorited] = useState(false);

  const [isOpen, seIsOpen] = useState(false);

  const openAndCloseModal = () => seIsOpen((state) => !state);

  const favoriteCharacter = () => {
    const origin = {
      originName: character.origin.name,
      originUrl: character.origin.id
        ? ORIGIN_LOCATION_URL.replace("*", character.origin.id)
        : "",
    };

    const location = {
      locationName: character.location.name,
      locationUrl: character.location.id
        ? ORIGIN_LOCATION_URL.replace("*", character.location.id)
        : "",
    };

    const episodes =
      character.episode.length > 0
        ? character.episode.map(({ id }) => {
            return EPISODE_URL.replace("*", id);
          })
        : [];

    mutateFunction({
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
        userId: user.id,
      },

      onCompleted: (data) => {
        toast.success("Personagem favoritado.");

        setUserData(data.addFavorite);
      },
      onError: (error) => console.log(error),
    });
  };

  useEffect(() => {
    const favorited = user.favorites
      ? user.favorites.some(({ name }) => name === character.name)
      : false;

    if (favorited) {
      setIsFavorited((state) => !state);
    }
  }, [user]);

  return (
    <Container status={character.status}>
      <Image status={character.status} src={character.image} />

      <Name status={character.status}>{character.name}</Name>

      <ButtonsCardContainer>
        <IconButton type="button" onClick={() => openAndCloseModal()}>
          <AiOutlineInfo />
        </IconButton>

        <IconButton type="button" onClick={() => favoriteCharacter()}>
          {isFavorited ? <AiFillHeart /> : <AiOutlineHeart />}
        </IconButton>
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
