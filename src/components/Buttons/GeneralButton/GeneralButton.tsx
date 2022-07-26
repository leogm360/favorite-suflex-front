import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface IGeneralButton {
  children: ReactNode;
}

export const GeneralButton = ({ children }: IGeneralButton) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};
