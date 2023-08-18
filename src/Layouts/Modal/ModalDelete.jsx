import { Modal, Button } from "react-bootstrap";

export const ModalDelete = ({
  show,
  handleClose,
  messageToDelete,
  funtionToDeleted,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{`${messageToDelete}`}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={async () => {
            funtionToDeleted();
          }}
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
