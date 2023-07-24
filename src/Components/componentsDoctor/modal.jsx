
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export const MyModal = ({ show, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitClick = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Medico</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>

      <form onSubmit={handleSubmit(onSubmitClick)}>
  <div className="form-group">
    <label>Nombre Completo</label>
    <input
      type="text"
      className="form-control"
      placeholder="Nombre Completo"
      autoComplete="off"
      {...register("nombre", { required: true })}
    />
    {errors.nombre && (
      <span className="text-danger">El dato es requerido</span>
    )}
  </div>

  <div className="form-group">
    <label>Especialización</label>
    <input
      type="text"
      className="form-control"
      placeholder="Especialización"
      autoComplete="off"
      {...register("especializacion", { required: true })}
    />
    {errors.especializacion && (
      <span className="text-danger">El dato es requerido</span>
    )}
  </div>

  <div className="form-group">
    <label>Dirección</label>
    <input
      type="text"
      className="form-control"
      placeholder="Calle, Numero, Colonia"
      autoComplete="off"
      {...register("direccion", { required: true })}
    />
    {errors.direccion && (
      <span className="text-danger">El dato es requerido</span>
    )}
  </div>

  <div className="form-group">
    <label>Teléfono</label>
    <input
      type="tel"
      className="form-control"
      placeholder="Número de teléfono"
      autoComplete="off"
      {...register("telefono", {
        required: true,
        pattern: /^[0-9]+$/,
        minLength: 10,
      })}
    />
    {errors.telefono && (
      <span className="text-danger">
        Ingrese un número de teléfono válido (solo números, mínimo 10 dígitos)
      </span>
    )}
  </div>

  <div className="form-group">
    <label>Email</label>
    <input
      type="email"
      className="form-control"
      autoComplete="off"
      placeholder="Agregar su email"
      {...register("email", { required: true })}
    />
    {errors.email && (
      <span className="text-danger">El dato es requerido</span>
    )}
  </div>

  <div>
    <Modal.Footer>
      <Button type="submit">Agregar</Button>
    </Modal.Footer>
  </div>
</form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

