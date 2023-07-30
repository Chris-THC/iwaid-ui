import { Modal, Button } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";
import { useContext } from "react";

export const MyModalDelete = ({ show, handleClose }) => {
  const {
    idDoctor,
    deleteDoctorFunction,
    getAllDoctorsDataFunction,
    setGetDataAllDoctors,
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
        <p>¿Está seguro de que desea eliminar este usuario?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={async () => {
            console.log(`Eliminar al usuario con id: ${idDoctor}`);

            // alert("Doctor Eliminado");

            try {
              await deleteDoctorFunction(idDoctor);
              await getAllDoctorsDataFunction(setGetDataAllDoctors);
              handleButtonClick();
            } catch (error) {
              console.error("Error al agregar el médico:", error);
            }
          }}
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
