import loaderImage from "../../assets/img/loader.png";
import { Container, Image } from "./styles";

export const Loader = () => {
  return (
    <Container>
      <Image src={loaderImage} />
    </Container>
  );
};
