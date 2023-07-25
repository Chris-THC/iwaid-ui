// import { useState, useContext, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';


export const MyModalDelete = ({ show, handleClose, Id }) => {

  
  const handleButtonClick = () => {
    handleClose();
  };
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar Eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Estás seguro de que deseas eliminar este usuario?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleButtonClick}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
