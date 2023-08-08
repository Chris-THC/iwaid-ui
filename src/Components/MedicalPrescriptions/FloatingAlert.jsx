import React, { useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { GetTheAppContext } from "../../Context/AppContext";

export const FloatingAlert = ({ show, message, onClose }) => {
  const { actionButtonModal } = useContext(GetTheAppContext);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const getAlertStyle = () => {
    if (actionButtonModal === "Agregar") {
      return { backgroundColor: "#d4edda" };
    } else if (actionButtonModal === "Editar") {
      return { backgroundColor: "#cce5ff" };
    } else if (actionButtonModal === "Eliminar") {
      return { backgroundColor: "#f8d7da" };
    }
  };

  const getAlertClass = () => {
    if (actionButtonModal === "Agregar") {
      return "alert-success";
    } else if (actionButtonModal === "Editar") {
      return "alert-primary";
    } else if (actionButtonModal === "Eliminar") {
      return "alert-danger";
    }
  };

  const AlertMessage = () => {
    let alertStyle = getAlertStyle();
    return (
      <>
        <Modal.Body className="text-center" style={alertStyle}>
          <div className={`alert ${getAlertClass} text-muted`} role="alert">
            {message}
          </div>
        </Modal.Body>
      </>
    );
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <AlertMessage />
    </Modal>
  );
};
