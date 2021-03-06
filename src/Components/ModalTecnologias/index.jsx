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
  width: "96%",
  maxWidth: "500px",
  heigth: 800,
  boxShadow: 24,
  p: 4,
};

export default function ModalTecnologias({
  token,
  title,
  bgColor,
  status,
  tecId,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit } = useForm();

  const editTecs = (data) => {
    api
      .put(`/users/techs/${tecId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const deleteTecs = () => {
    api
      .delete(`/users/techs/${tecId}`, {
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
            <form onSubmit={handleSubmit(editTecs)}>
              <Input
                label="Nome"
                placeholder="Ex: Typescript"
                register={register}
                name="title"
                value={title}
                disabled
              />

              <p className="white">Selecionar status</p>

              {/* {<p className="error">{errors.course_module?.message}</p>} */}
              <select {...register("status")}>
                <option value="">Conhecimento</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermedi??rio">Intermedi??rio</option>
                <option value="Avan??ado">Avan??ado</option>
              </select>
              <Button bgColor="var(--primary-negative)" type="submit">
                Salvar Altera????es
              </Button>
              <Button onClick={() => deleteTecs()} bgColor="var(--grey-1)">
                Excluir
              </Button>
            </form>
          </BodyModal>
        </Box>
      </Modal>
    </div>
  );
}
