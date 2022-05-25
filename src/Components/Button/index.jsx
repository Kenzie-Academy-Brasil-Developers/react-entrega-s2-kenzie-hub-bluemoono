import { Container } from "./styles";

export default function Button({ children, bgColor, ...res }) {
  return (
    <Container bgColor={bgColor} type="button" {...res}>
      {children}
    </Container>
  );
}
