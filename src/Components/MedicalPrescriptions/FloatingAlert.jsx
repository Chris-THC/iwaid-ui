import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";

export const FloatingAlert = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body className="text-center">{message}</Modal.Body>
    </Modal>
  );
};
