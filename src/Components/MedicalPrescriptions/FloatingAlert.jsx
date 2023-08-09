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
      return "success-alert";
    } else if (actionButtonModal === "Editar") {
      return "primary-alert";
    } else if (actionButtonModal === "Eliminar") {
      return "danger-alert";
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
    return (
      <>
        <Modal.Body className={`text-center ${getAlertStyle()}`}>
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
