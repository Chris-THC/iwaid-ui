import { Modal, Button } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";
import { useContext } from "react";

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
            try {
              await deleteDoctorFunction(doctorId);
              await getAllDoctorsDataFunction(setGetDataAllDoctors);
              handleButtonClick();
              setTextAlert(`Se eliminó al médico ${dataUserDoctor.name}`);
              handleShowFloatAlter();
            } catch (error) {
              setTextAlert("Error al agregar el médico");
            }
          }}
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
