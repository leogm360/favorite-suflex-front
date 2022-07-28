import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface IGeneralButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const GeneralButton = ({ children, ...rest }: IGeneralButton) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};
