import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const IconButton = ({ children, ...rest }: IIconButton) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};
