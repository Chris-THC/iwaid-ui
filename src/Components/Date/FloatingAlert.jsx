import React, { useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";

export const FloatingAlert = ({ show, message, onClose }) => {
  const { actionButtonModal, Error } = useContext(GetTheAppContext);
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const AlertMsn = () => {
    if (actionButtonModal === "Agregar") {
      return (
        <>
          <Modal.Body
            className="text-center"
            style={{ backgroundColor: "#d4edda" }}
          >
            <div className="alert alert-success text-muted" role="alert">
              {message}
            </div>
          </Modal.Body>
        </>
      );
    }  else if (actionButtonModal === "Editar" && Error){
      return (
        <>
          <Modal.Body
            className="text-center"
            style={{ backgroundColor: "#f8d7da" }}
          >
            <div className="alert alert-danger text-muted" role="alert">
              {message}
            </div>
          </Modal.Body>
        </>
      );
    }else if (actionButtonModal === "Editar") {
      return (
        <>
          <Modal.Body
            className="text-center"
            style={{ backgroundColor: "#cce5ff" }}
          >
            <div className="alert alert-primary text-muted" role="alert">
              {message}
            </div>
          </Modal.Body>
        </>
      );
    } else if (actionButtonModal === "Eliminar" ) {
      return (
        <>
          <Modal.Body
            className="text-center"
            style={{ backgroundColor: "#f8d7da" }}
          >
            <div className="alert alert-danger text-muted" role="alert">
              {message}
            </div>
          </Modal.Body>
        </>
      );
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <AlertMsn />
    </Modal>
  );
};
