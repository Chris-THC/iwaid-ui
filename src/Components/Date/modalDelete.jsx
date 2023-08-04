
import { Modal, Button } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";
import { useContext } from "react";

export const MyModalDelete = ({ show, handleClose }) => {
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
            try {
              await deleteDateFunction(idDate);
              await getAllDateDataFunction(setAllDataDate);
              handleButtonClick();
              setTextAlert(`Se eliminó medicamento con id ${idDate}`);
              handleShowFloatAlter();
            } catch (error) {
              console.error("Error al eliminar medicamento:", error);
            }
          }}
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

