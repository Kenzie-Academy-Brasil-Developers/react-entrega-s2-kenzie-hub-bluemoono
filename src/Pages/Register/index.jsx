import Button from "../../Components/Button";
import ButtonLong from "../../Components/ButtonLong";
import Input from "../../Components/Input";
import { Container, Content, Logo } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../Services/api";
import { toast } from "react-toastify";

export default function Register({ token }) {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório: Nome"),
    email: yup
      .string()
      .email("E-mail inválido")
      .required("Campo obrigatório: E-mail"),
    password: yup
      .string()
      .min(6, "Necessário ter no mínimo 6 digitos")
      .required("Campo obrigatório: Senha"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas divergentes")
      .required("Campo obrigatório: Confirmar senha"),
    course_module: yup.string().required("Campo obrigatório: Módulo do curso"),
    bio: yup.string().default("null"),
    contact: yup.string().default("null"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const cadastrar = (data) => {
    delete data.passwordConfirm;

    api
      .post("/users", data)
      .then((res) => {
        reset();
        toast.success("Conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, algo deu errado!");
      });
  };

  // if (token === false || token === undefined || token === null) {
  //   return <Redirect to="/login" />;
  // }
  return (
    <Container>
      <Logo>Kenzie Hub</Logo>
      <Button onClick={() => history.push("/login")}>Voltar</Button>
      <Content>
        <h2>Crie sua conta</h2>
        <p>Rápido e gratis, vamos nessa</p>

        <form onSubmit={handleSubmit(cadastrar)}>
          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            register={register}
            name="name"
            error={errors.name?.message}
          />
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
          <Input
            label="Confirmar Senha"
            placeholder="Digite novamente sua senha"
            type="password"
            register={register}
            name="passwordConfirm"
            error={errors.password?.message}
          />

          <p className="white">Selecionar módulo</p>

          {<p className="error">{errors.course_module?.message}</p>}
          <select {...register("course_module")}>
            <option value="">Valor</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </select>

          <ButtonLong type="submit" bgColor="var(--primary-negative)">
            Cadastrar
          </ButtonLong>
        </form>
      </Content>
    </Container>
  );
}
