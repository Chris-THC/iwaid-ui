import React, { useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { FormCitas } from "./FormDate";
import { GetTheAppContext } from "../../Context/AppContext";

export const ModalDates = ({ show, handleClose }) => {
  const {
    setGetDataFromTable,
    getDataFromTable,
    actionButtonModal,
    token,
    getAllDateDataFunction,
    setAllDataDate,
  } = useContext(GetTheAppContext);

  useEffect(() => {
    getAllDateDataFunction(setAllDataDate, token);
  }, []);

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => {
        setGetDataFromTable({});
        handleClose();
      }}
    >
      <Modal.Header>
        <Modal.Title>{actionButtonModal} cita médica</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormCitas isGetData={getDataFromTable} />
      </Modal.Body>
    </Modal>
  );
};
