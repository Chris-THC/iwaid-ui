import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { FormPatient } from "./FormPatient";
import { GetTheAppContext } from "../../Context/AppContext";

export const ModalPatient = ({ show, handleClose }) => {
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
        <Modal.Title>{actionButtonModal} paciente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormPatient isGetData={getDataFromTable} />
      </Modal.Body>
    </Modal>
  );
};
