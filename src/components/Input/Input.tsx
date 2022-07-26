import { Container, HelperText, InputField, Label } from "./styles";

interface IInput {
  label: string;
  helper: string;
}

export const Input = ({ label, helper }: IInput) => {
  return (
    <Container>
      <Label>{label}</Label>

      <InputField />

      <HelperText>{helper}</HelperText>
    </Container>
  );
};
