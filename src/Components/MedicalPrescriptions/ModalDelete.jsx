import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";
import { statusDeleted } from "./HTTPstatus.js";

export const ModalDelete = ({ show, handleClose }) => {
  const {
    allPrescriptionsFromApiFunction,
    deletePrescriptionFunction,
    setAllPrescriptionsData,
    setActionButtonModal,
    setTextAlert,
    handleShowFloatAlter,
    dataPrescription,
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
        <p>¿Está seguro de que desea eliminar esta preinscripción?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={async () => {
            setActionButtonModal("Eliminar");
            console.log(dataPrescription.id);
            const response = await deletePrescriptionFunction(
              dataPrescription.id
            );

            if (response.status === statusDeleted) {
              await allPrescriptionsFromApiFunction(setAllPrescriptionsData);
              handleButtonClick();
              setTextAlert(
                `Se eliminó la preinscripción del paciente ${dataPrescription.patient.name}`
              );
              handleShowFloatAlter();
            } else {
              handleButtonClick();
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
