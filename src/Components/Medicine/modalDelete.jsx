
import { Modal, Button } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";
import { useContext } from "react";

export const MyModalDelete = ({ show, handleClose }) => {
  const {
    idMedicine,
    deleteMedicineFunction,
    getAllMedicineDataFunction,
    setGetDataAllMedicine,
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
        <p>¿Está seguro de que desea eliminar este medicamento?</p>
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
              await deleteMedicineFunction(idMedicine);
              await getAllMedicineDataFunction(setGetDataAllMedicine);
              handleButtonClick();
              setTextAlert(`Se eliminó al usuario con id ${idMedicine}`);
              handleShowFloatAlter();
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

