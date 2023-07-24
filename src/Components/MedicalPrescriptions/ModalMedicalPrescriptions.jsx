import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { FormMedicalPrescriptions } from "./FormMedicalPrescriptions";
import { GetTheAppContext } from "../../Context/AppContext";

export const ModalMedicalPrescriptions = ({ show, handleClose }) => {
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
      <Modal.Header closeButton>
        <Modal.Title>{actionButtonModal} prescripción médica</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormMedicalPrescriptions isGetData={getDataFromTable} />
      </Modal.Body>
    </Modal>
  );
};
