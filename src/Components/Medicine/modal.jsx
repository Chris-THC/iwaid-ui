import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { FormMedicine } from "./FormMedicine";
import { GetTheAppContext } from "../../Context/AppContext";

export const ModalMedicine = ({ show, handleClose }) => {
  const { setDataFromTable, getDataFromTable, actionButtonModal } =
  useContext(GetTheAppContext);

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => {
        handleClose();
        setDataFromTable({});
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{actionButtonModal} medicamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormMedicine isGetData={getDataFromTable} />
      </Modal.Body>
    </Modal>
  );
};
