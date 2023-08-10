import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { FormMedicine } from "./FormMedicine";
import { GetTheAppContext } from "../../Context/AppContext";

export const ModalMedicine = ({ show, handleClose }) => {
  const { setDataMedicineFromTable, dataMedicineFromTable, actionButtonModal } =
  useContext(GetTheAppContext);

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => {
        handleClose();
        setDataMedicineFromTable({});
      }}
    >
      <Modal.Header >
        <Modal.Title>{actionButtonModal} medicamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormMedicine isGetData={dataMedicineFromTable} />
      </Modal.Body>
    </Modal>
  );
};
