import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";
import { statusDeleted } from "../../Context/HTTPStatus";

export const ModalDelete = ({ show, handleClose }) => {
  const {
    setTextAlert,
    handleShowFloatAlter,
    deleteHistoryFunction,
    dataMedicalHistory,
    setAllMedicalHistoryData,
    allHistoryFromApiFunction,
    setActionButtonModal,
  } = useContext(GetTheAppContext);

  const buttonClick = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Está seguro de que desea eliminar este historial?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={async () => {
            setActionButtonModal("Eliminar");
            const response = await deleteHistoryFunction(dataMedicalHistory.id);

            if (response.status === statusDeleted) {
              await allHistoryFromApiFunction(setAllMedicalHistoryData);
              buttonClick();
              setTextAlert(
                `Se eliminó el historial médico del paciente ${dataMedicalHistory.patient.name}`
              );
              handleShowFloatAlter();
            } else {
              buttonClick();
              setTextAlert("Error al eliminar la preinscripción");
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
