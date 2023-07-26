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
    formState: { errors },
  } = useForm();

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
          <label>Dosis</label>
          <input
            type="number"
            className="form-control"
            placeholder="Dosis en cantidad entera"
            autoComplete="off"
            {...register("dosis", {
              required: true,
              min: 1, // Puedes ajustar el mínimo de la dosis según tus necesidades
            })}
            defaultValue={isGetData.dosis}
          />
          {errors.dosis && (
            <span className="text-danger">El dato es requerido</span>
          )}
        </div>

        <div className="form-group">
          <label>Presentación</label>
          <input
            type="text"
            className="form-control"
            placeholder="Presentación"
            autoComplete="off"
            {...register("presentation", { required: true })}
            defaultValue={isGetData.presentation}
          />
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

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      
    <div>
      <Modal.Footer>
        <Button type="submit">Editar</Button>
      </Modal.Footer>
    </div>
  </form>
  </div>
    );
  };

  