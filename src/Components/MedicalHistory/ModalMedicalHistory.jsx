import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { FormMedicalHistory } from "./FormMedicalHistory";
import { GetTheAppContext } from "../../Context/AppContext";

export const ModalMedicalHistory = ({ show, handleClose }) => {
  const { setGetDataFromTable, getDataFromTable, actionButtonModal } =
    useContext(GetTheAppContext);

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => {
        handleClose();
        setGetDataFromTable({});
      }}
    >
      <Modal.Header >
        <Modal.Title>{actionButtonModal} historial médico</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormMedicalHistory isGetData={getDataFromTable} />
      </Modal.Body>
    </Modal>
  );
};
