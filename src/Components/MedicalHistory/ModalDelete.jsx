import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";
import { statusDeleted } from "./HTTPstatus.js";

export const ModalDelete = ({ show, handleClose }) => {
  const { setTextAlert, handleShowFloatAlter } = useContext(GetTheAppContext);
  const handleButtonClick = () => {
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
          onClick={() => {
            handleButtonClick();
            setTextAlert("Se elimino");
            handleShowFloatAlter();

            // TODO: This code is a guide that will be removed when the API is ready and the correct code is implemented.

            // console.log(dataPrescription.id);
            // const response = await deletePrescriptionFunction(
            //   dataPrescription.id
            // );

            // if (response.status === statusDeleted) {
            //   await allPrescriptionsFromApiFunction(setAllPrescriptionsData);
            //   handleButtonClick();
            //   setTextAlert(
            //     `Se eliminó la preinscripción del paciente ${dataPrescription.patient.name}`
            //   );
            //   handleShowFloatAlter();
            // } else {
            //   handleButtonClick();
            //   setTextAlert("Error al eliminar la preinscripción");
            //   handleShowFloatAlter();
            // }
          }}
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
