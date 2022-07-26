import { Container, HelperText, InputField, Label } from "./styles";

interface IInput {
  label: string;
  helper?: string;
  placeholder?: string;
}

export const Input = ({ label, helper, placeholder }: IInput) => {
  return (
    <Container>
      <Label>{label}</Label>

      <InputField placeholder={placeholder} />

      <HelperText>{helper}</HelperText>
    </Container>
  );
};
