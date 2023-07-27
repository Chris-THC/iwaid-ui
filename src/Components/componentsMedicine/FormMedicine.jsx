import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import React, { useContext, useEffect } from "react";
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
          <label>Nombre de la medicina</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de la medicina"
            autoComplete="off"
            {...register("name", { required: true })}
            defaultValue={isGetData.name}
          />
          {errors.name && (
            <span className="text-danger">El dato es requerido</span>
          )}
        </div>

        <div className="form-group">
  <label>Dosis (en gramos)</label>
  <input
    type="number"
    className="form-control"
    placeholder="Dosis en cantidad"
    autoComplete="off"
    step="any" 
    {...register("dosis", {
      required: true,
      min: 0, // Puedes ajustar el mínimo de la dosis según tus necesidades
    })}
    defaultValue={isGetData.dosis}
  />
  {errors.dosis && (
    <span className="text-danger">El dato es requerido</span>
  )}
</div>

<div className="form-group col-md-4">
              <label>Presentación</label>
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
          <label>Descripción</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Descripción"
            {...register("description", { required: true })}
            defaultValue={isGetData.description}
          ></textarea>
          {errors.description && (
            <span className="text-danger">El dato es requerido</span>
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

  