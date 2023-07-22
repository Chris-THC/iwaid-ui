import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
export const FormPatient = ({ isGetData = {} }) => {
  const { setDataUserPatient, handleCloseModal, actionButtonModal } =
    useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitClick = (data) => {
    setDataUserPatient(data);
    // let arrayDataTest = [...dataTest, data];
    // setDataTest(arrayDataTest);
    console.log(data);
    handleCloseModal();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitClick)}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Nombre Completo</label>
            <input
              defaultValue={isGetData.nombre}
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
                defaultValue={isGetData.fechaNacimiento}
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
              <label>Género</label>
              <select
                defaultValue={isGetData.genero} // Aquí se asigna el valor al select
                className="form-select"
                autoComplete="off"
                {...register("sexo", { required: true })}
              >
                <option value="Seleccionar">Seleccionar</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
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
            defaultValue={isGetData.rfc}
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
              defaultValue={isGetData.direccion}
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
              defaultValue={isGetData.ciudad}
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
              defaultValue={isGetData.telefono}
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
              defaultValue={isGetData.correo}
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
            <Button type="submit">{actionButtonModal}</Button>
          </Modal.Footer>
        </div>
      </form>
    </div>
  );
};
