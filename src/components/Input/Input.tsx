import { forwardRef, InputHTMLAttributes } from "react";
import {
  Container,
  Dash,
  Error,
  HelperText,
  InputField,
  Label,
  TopContainer,
} from "./styles";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helper?: string;
  error?: any;
  placeholder?: string;
}

export const Input = forwardRef(
  ({ label, helper, error, ...rest }: IInput, ref) => {
    return (
      <Container>
        <TopContainer>
          <Label htmlFor={rest.id}>{label}</Label>

          {error && <Dash> - </Dash>}

          {error && <Error>{error}</Error>}
        </TopContainer>

        {/* @ts-ignore*/}
        <InputField {...rest} ref={ref} />
        <HelperText>{helper}</HelperText>
      </Container>
    );
  }
);
