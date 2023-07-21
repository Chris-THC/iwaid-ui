
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


/* <form onSubmit={handleSubmit(onSubmitClick)}>
        <div className="form-row">
          <div className="form-group col-md-12">
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

          <div className="form-group row">
            <div className="form-group col-md-8">
              <label>Fecha de Nacimiento</label>
              <input
                type="date"
                className="form-control"
                autoComplete="off"
                {...register("fechaNacimineto", { required: true })}
              />
              {errors.fechaNacimineto && (
                <span className="text-danger">El dato es requerido</span>
              )}
            </div>

            <div className="form-group col-md-4">
              <label>Sexo</label>
              <select
                className="form-select"
                autoComplete="off"
                {...register("sexo", { required: true })}
              >
                <option value="Seleccionar">Seleccionar</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
              </select>
              {errors.sexo && (
                <span className="text-danger">El dato es requerido</span>
              )}
            </div>
          </div>
        </div>

        <div className="form-group col-md-8">
          <label>RFC</label>
          <input
            type="text"
            className="form-control"
            placeholder="Agregar RFC"
            autoComplete="off"
            pattern="^[A-Z]{4}\d{6}[A-Z0-9]{3}$"
            {...register("rfc", { required: true })}
          />
          {errors.rfc && (
            <span className="text-danger">El dato es requerido</span>
          )}
        </div>

        <div className="form-group row">
          <div className="form-group col-md-8">
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

          <div className="form-group col-md-4">
            <label>Ciudad</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ciudad"
              autoComplete="off"
              {...register("ciudad", { required: true })}
            />
            {errors.ciudad && (
              <span className="text-danger">El dato es requerido</span>
            )}
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPhone">Teléfono</label>
            <input
              type="number"
              className="form-control"
              placeholder="Numero de telefono"
              autoComplete="off"
              {...register("telefono", { required: true, minLength: 10 })}
            />
            {errors.telefono && (
              <span className="text-danger">
                Ingrese un numero de teléfono valido
              </span>
            )}
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              autoComplete="off"
              placeholder="Agregar su email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">El dato es requerido</span>
            )}
          </div>
        </div>

        <div>
          <Modal.Footer>
            <Button type="submit">Agregar</Button>
          </Modal.Footer>
        </div>
        </form> */