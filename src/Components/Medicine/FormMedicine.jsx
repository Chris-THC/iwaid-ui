import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import React, { useContext} from "react";
import { GetTheAppContext } from "../../Context/AppContext";

export const FormMedicine = ({ isGetData = {} }) => {

  const {
    setDataUserMedicine,
    handleCloseModal,
    actionButtonModal,
    handleShowFloatAlter,
    setTextAlert,
    setGetDataFromTable,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

 

  const onSubmitClick = (data) => {
    setDataUserMedicine(data);
    console.log(data);
    handleCloseModal();
    setTextAlert("Datos Guardados");
    handleShowFloatAlter();
  };
  
  
  
    return (
      
      <div>
      <form onSubmit={handleSubmit(onSubmitClick)}>

            <div className="form-group">
        <label>Clave
        <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Clave del medicamento"
          autoComplete="off"
          {...register("clave", {
            required: true,
            maxLength: 5,
            pattern: /^[a-zA-Z0-9]+$/,
          })}
          defaultValue={isGetData.clave}
        />
        {errors.clave?.type === "required" && (
          <span className="text-danger">*El dato es requerido</span>
        )}
        {errors.clave?.type === "maxLength" && (
          <span className="text-danger">*Máximo 5 caracteres</span>
        )}
        {errors.clave?.type === "pattern" && (
          <span className="text-danger">*Solo caracteres alfanuméricos</span>
        )}
      </div>

            <div className="form-group">
        <label>Nombre del medicamento
        <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del medicamento"
          autoComplete="off"
          {...register("name", {
            required: true,
            maxLength: 100,
            pattern: /^[a-zA-Z0-9\s]+$/,
          })}
          defaultValue={isGetData.name}
        />
        {errors.name?.type === "required" && (
          <span className="text-danger">*El dato es requerido</span>
        )}
        {errors.name?.type === "maxLength" && (
          <span className="text-danger">*Máximo 100 caracteres</span>
        )}
        {errors.name?.type === "pattern" && (
          <span className="text-danger">
            *Solo caracteres alfanuméricos y espacios
          </span>
        )}
      </div>


      <div className="form-group">
        <label>Dosis
        <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Dosis"
          autoComplete="off"
          {...register("dosis", { required: true })}
          defaultValue={isGetData.dosis}
        />
        {errors.dosis && (
          <span className="text-danger">*El dato es requerido</span>
        )}
      </div>

      <div className="form-group col-md-4">
                    <label>Presentación
                    <span className="text-danger">*</span>
                    </label>
                    <select
                      defaultValue={isGetData.presentation} // Aquí se asigna el valor al select
                      className="form-select"
                      autoComplete="off"
                      {...register("presentation", { required: true })}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Sólidos">Sólidos</option>
                      <option value="Soluciones">Soluciones</option>
                      <option value="Suspensiones">Suspensiones</option>
                      <option value="Emulsiones">Emulsiones</option>
                      <option value="Otro">Otro</option>
                    </select>
                    {errors.presentation && (
          <span className="text-danger">El dato es requerido</span>
        )}
                  </div>
                

                  <div className="form-group">
        <label>Descripción
        </label>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Descripción"
          {...register("description", { required: true })}
          defaultValue={isGetData.description}
        ></textarea>
        {errors.description && (
          <span className="text-danger">*El dato es requerido</span>
        )}
      </div>


      
    <div>
      <Modal.Footer>
      <Button
              type="submit"
              onClick={() => {
                setGetDataFromTable({});
              }}
              disabled={!isValid}
            >
              {actionButtonModal}
            </Button>
      </Modal.Footer>
    </div>
  </form>
  </div>
    );
  };

  