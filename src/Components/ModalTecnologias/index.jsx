import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import api from "../../Services/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BodyModal, ButtonModal, HeaderModal } from "./styles";
import Input from "../Input";
import Button from "../Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  heigth: 800,
  boxShadow: 24,
  p: 4,
};

export default function ModalTecnologias({ token, title, bgColor, status }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const newTecs = (data) => {
    console.log(data);
    console.log(token);

    api
      .put("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ButtonModal bgColor={bgColor} onClick={handleOpen}>
        <>{title}</> <p>{status}</p>
      </ButtonModal>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <HeaderModal>
            <h4>Tecnologia Detalhes</h4>
            <button onClick={() => handleClose()}>X</button>
          </HeaderModal>
          <BodyModal>
            <form onSubmit={handleSubmit(newTecs)}>
              <Input
                label="Nome"
                placeholder="Ex: Typescript"
                register={register}
                name="title"
              />

              <p className="white">Selecionar status</p>

              {/* {<p className="error">{errors.course_module?.message}</p>} */}
              <select {...register("status")}>
                <option value="">Conhecimento</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <Button bgColor="var(--primary-negative)" type="submit">
                Salvar Alterações
              </Button>
              <Button bgColor="var(--grey-1)">Excluir</Button>
            </form>
          </BodyModal>
        </Box>
      </Modal>
    </div>
  );
}
