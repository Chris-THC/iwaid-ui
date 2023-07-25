import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import React, { useContext, useEffect } from "react";
import { GetTheAppContext } from "../../Context/AppContext";

export const FormDoctor = ({ isGetData = {} }) => {

  const {
    setDataUserDoctor,
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
    setDataUserDoctor(data);
    console.log(data);
    handleCloseModal();
    setTextAlert("Datos Guardados");
    handleShowFloatAlter();
  };
  
  
  
    return (
      
  <div>
        <form onSubmit={handleSubmit(onSubmitClick)}>
    <div className="form-group">
      <label>Nombre Completo</label>
      <input
             defaultValue={isGetData.name}
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
        defaultValue={isGetData.specialization}
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
        defaultValue={isGetData.address}
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
        defaultValue={isGetData.phoneNumber}
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
        defaultValue={isGetData.email}
      />
      {errors.email && (
        <span className="text-danger">El dato es requerido</span>
      )}
    </div>
  
    <div>
      <Modal.Footer>
        <Button type="submit">Editar</Button>
      </Modal.Footer>
    </div>
  </form>
  </div>
    );
  };

  