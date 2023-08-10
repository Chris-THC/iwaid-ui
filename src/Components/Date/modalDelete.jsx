
import { Modal, Button } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";
import { useContext } from "react";
import { statusDeleted } from "./HTTPStatus.js";

export const ModalDelete = ({ show, handleClose }) => {
  const {
    idDate,
    deleteDateFunction,
    getAllDateDataFunction,
    setAllDataDate,
    setTextAlert,
    handleShowFloatAlter,
    setActionButtonModal,
  } = useContext(GetTheAppContext);

  const handleButtonClick = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Está seguro de que desea eliminar esta cita?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={async () => {
            setActionButtonModal("Eliminar");
            const responseModalDelete = await deleteDateFunction(
              idDate
            );
            if (responseModalDelete.status === statusDeleted) {
              await getAllDateDataFunction(setAllDataDate);
              setTextAlert(`Se eliminó la cita`);
              handleButtonClick();
              handleShowFloatAlter();
            } else {
              handleButtonClick();
              setTextAlert(`Error al eliminar la cita`);
              handleShowFloatAlter();
            }
          }}
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

