import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Button from "../../Components/Button";
import BasicModal from "../../Components/Modal";
import ModalTecnologias from "../../Components/ModalTecnologias";
import api from "../../Services/api";
import { Container, ContainerLogo, Content, Logo } from "./styles";

export default function Home({ token, user, setToken, setUser }) {
  const [modal, setModal] = useState([]);
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setToken("");
    setUser({});
    history.push("/login");
  };

  const loadModals = () => {
    api
      .get(`/users/${user.id}`)
      .then((res) => {
        res.data.techs.map((tec) => setModal([...modal, tec]));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadModals();
  }, []);
  console.log(modal);

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
        {modal.map((t) => (
          <ModalTecnologias
            key={t.id}
            bgColor="var(--grey-4)"
            title={t.title}
            status={t.status}
            tecId={t.id}
            token={token}
          />
        ))}
      </Content>
    </Container>
  );
}
