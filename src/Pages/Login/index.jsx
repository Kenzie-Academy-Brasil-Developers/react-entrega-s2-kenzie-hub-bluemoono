import ButtonLong from "../../Components/ButtonLong";
import Input from "../../Components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Content, Logo } from "./styles";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../Services/api";

export default function Login({ user, token, setUser, setToken }) {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail inválido")
      .required("Campo obrigatório: E-mail"),
    password: yup
      .string()
      .min(6, "Necessário ter no mínimo 6 digitos")
      .required("Campo obrigatório: Senha"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const logingIn = (data) => {
    console.log(data);

    api
      .post("/sessions", data)
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        const user = res.data.user;
        localStorage.setItem("@KenzieHub: token", token);
        localStorage.setItem("@KenzieHub: user", JSON.stringify(user));
        setToken(token);
        setUser(user);
        history.push("/");
        reset();
      })
      .catch((err) => console.log(err));
  };

  if (token !== "") {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Logo>Kenzie Hub</Logo>
      <Content>
        <h2>Login</h2>

        <form onSubmit={handleSubmit(logingIn)}>
          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            placeholder="Digite aqui sua senha"
            type="password"
            register={register}
            name="password"
            error={errors.password?.message}
          />

          <ButtonLong type="submit" bgColor="var(--primary)">
            Entrar
          </ButtonLong>

          <p className="center">Ainda não possui uma conta?</p>
          <ButtonLong
            bgColor="var(--grey-1)"
            onClick={() => history.push("/register")}
          >
            Cadastre-se
          </ButtonLong>
        </form>
      </Content>
    </Container>
  );
}
