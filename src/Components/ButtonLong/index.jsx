import { Container } from "./styles";

export default function ButtonLong({ children, bgColor, ...res }) {
  return (
    <Container bgColor={bgColor} type="button" {...res}>
      {children}
    </Container>
  );
}
