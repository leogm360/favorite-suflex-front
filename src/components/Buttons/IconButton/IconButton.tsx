import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classNme?: string;
  callback?: () => void;
}

export const IconButton = ({ children, className, callback }: IIconButton) => {
  return (
    <ButtonContainer
      className={className}
      onClickCapture={() => (callback ? callback() : false)}
    >
      {children}
    </ButtonContainer>
  );
};
