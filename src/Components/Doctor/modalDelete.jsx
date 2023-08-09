import { Modal, Button } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";
import { useContext } from "react";
import { statusDeleted } from "./HTTPstatus.js";

export const MyModalDelete = ({ show, handleClose }) => {
  const {
    doctorId,
    deleteDoctorFunction,
    getAllDoctorsDataFunction,
    setGetDataAllDoctors,
    setTextAlert,
    handleShowFloatAlter,
    setActionButtonModal,
    dataUserDoctor,
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
        <p>¿Está seguro que desea eliminar este médico?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={async () => {
            setActionButtonModal("Eliminar");
            const response = await deleteDoctorFunction(doctorId);
            if (response.status === statusDeleted) {
              await getAllDoctorsDataFunction(setGetDataAllDoctors);
              handleButtonClick();
              setTextAlert(`Se eliminó al médico ${dataUserDoctor.name}`);
              handleShowFloatAlter();
            } else {
              handleButtonClick();
              setTextAlert("Error al eliminar el médico");
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
