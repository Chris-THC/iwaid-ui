import { Modal, Button } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";
import { useContext } from "react";

export const MyModalDelete = ({ show, handleClose }) => {
  const {
    idMedicine,
    deleteMedicineFunction,
    getAllMedicineDataFunction,
    setAllDataMedicine,
    setTextAlert,
    handleShowFloatAlter,
    setActionButtonModal,
    nameMedicine,
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
            const responseModalDelete = await deleteMedicineFunction(
              idMedicine
            );

            if (responseModalDelete.status === 200) {
              await getAllMedicineDataFunction(setAllDataMedicine);
              setTextAlert(`Se eliminó ${nameMedicine}`);
              handleButtonClick();
              handleShowFloatAlter();
            } else {
              handleButtonClick();
              setTextAlert(`Error al eliminar medicamento`);

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
