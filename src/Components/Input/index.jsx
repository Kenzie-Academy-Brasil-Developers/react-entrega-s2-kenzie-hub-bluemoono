import { Container, InputComponent } from "./styles";

export default function Input({ label, register, name, error, ...rest }) {
  return (
    <Container>
      <p>
        {label} {!!error && <span> - {error}</span>}
      </p>

      <InputComponent
        type="text"
        {...register(name)}
        {...rest}
        isErrored={!!error}
      />
    </Container>
  );
}
