import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";

export const MyModalDelete = ({ show, handleClose }) => {
  const {
    deletePatientFunction,
    getAllPatientDataFunction,
    setGetAllPatientsData,
    patientId,
    setActionButtonModal,
    setTextAlert,
    dataUserPatient,
    handleShowFloatAlter,
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
        <p>¿Está seguro de que desea eliminar este paciente?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={async () => {
            setActionButtonModal("Eliminar");
            const response = await deletePatientFunction(patientId);

            if (response.status === 200) {
              await getAllPatientDataFunction(setGetAllPatientsData);
              handleButtonClick();
              setTextAlert(`Se eliminó al paciente ${dataUserPatient.name}`);
              handleShowFloatAlter();
            } else {
              handleButtonClick();
              setTextAlert("Error al eliminar el paciente");
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
