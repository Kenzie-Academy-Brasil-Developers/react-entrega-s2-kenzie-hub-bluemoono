import { Redirect, useHistory } from "react-router-dom";
import Button from "../../Components/Button";
import BasicModal from "../../Components/Modal";
import ModalTecnologias from "../../Components/ModalTecnologias";
import { Container, ContainerLogo, Content, Logo } from "./styles";

export default function Home({ token, user, setToken, setUser }) {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setToken("");
    setUser({});
    history.push("/login");
  };

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <ContainerLogo>
        <Logo>Kenzie Hub</Logo>
        <Button onClick={() => logout()}>Sair</Button>
      </ContainerLogo>
      <hr />
      <ContainerLogo id="mobileUser">
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </ContainerLogo>
      <hr />
      <ContainerLogo>
        <h3>Tecnologias</h3>
        <BasicModal token={token} />
      </ContainerLogo>

      <Content>
        {user.techs.map((tec) => (
          <ModalTecnologias
            key={tec.id}
            bgColor="var(--grey-4)"
            title={tec.title}
            status={tec.status}
          />
        ))}
      </Content>
    </Container>
  );
}
