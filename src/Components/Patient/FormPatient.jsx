import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
export const FormPatient = ({ isGetData = {} }) => {
  const currentDate = new Date().toISOString().split("T")[0];

  const {
    setDataUserPatient,
    handleCloseModal,
    actionButtonModal,
    setTextAlert,
    handleShowFloatAlter,
    setGetDataFromTable,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmitClick = (data) => {
    setDataUserPatient(data);
    console.log(data);
    handleCloseModal();
    setTextAlert("Datos Guardados");
    handleShowFloatAlter();
  };
  const [rfcValue, setRfcValue] = useState(isGetData.rfc || "");
  const [rfcError, setRfcError] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toUpperCase();
    setRfcValue(inputValue); // Actualiza el estado rfcValue con el valor en mayúsculas
    setValue("rfc", inputValue); // Actualiza el valor del campo en el formulario en mayúsculas
    const rfcPattern = /^[A-Z]{4}\d{6}[A-Z\d]{3}$/;
    if (!rfcPattern.test(inputValue)) {
      setRfcError("El RFC debe tener un formato válido en mayúsculas.");
    } else {
      setRfcError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitClick)}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>* Nombre Completo</label>
            <input
              defaultValue={isGetData.name}
              type="text"
              className="form-control"
              placeholder="Nombre Completo"
              autoComplete="off"
              {...register("name", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z\sÀ-ÖØ-öø-ÿ]+$/,
                },
              })}
            />
            {errors.name && (
              <span className="text-danger">
                El campo es solicitado o el campo del nombre no debe de llevar
                números
              </span>
            )}
          </div>

          <div className="form-group row">
            <div className="form-group col-md-8">
              <label>Fecha de Nacimiento</label>
              <input
                defaultValue={isGetData.dateOfBirth}
                type="date"
                className="form-control"
                autoComplete="off"
                {...register("dateOfBirth", {
                  required: true,
                  max: {
                    value: currentDate,
                  },
                })}
              />
              {errors.dateOfBirth && (
                <span className="text-danger">
                  El dato es solicitado o la fecha no puede ser mayor a la fecha
                  actual
                </span>
              )}
            </div>

            <div className="form-group col-md-4">
              <label>Género</label>
              <select
                defaultValue={isGetData.gender} // Aquí se asigna el valor al select
                className="form-select"
                autoComplete="off"
                {...register("gender", { required: true })}
              >
                <option value="">Seleccionar</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
              {errors.gender && (
                <span className="text-danger">El dato es requerido</span>
              )}
            </div>
          </div>
        </div>

        <div className="form-group col-md-8">
          <label>* RFC</label>
          <input
            defaultValue={rfcValue || isGetData.rfc}
            type="text"
            className="form-control"
            placeholder="RFC"
            autoComplete="off"
            {...register("rfc", { required: true })}
            onChange={handleInputChange}
            style={{ textTransform: "uppercase" }}
          />
          {rfcError && <span className="text-danger">{rfcError}</span>}
        </div>

        <div className="form-group row">
          <div className="form-group col-md-8">
            <label>Dirección</label>
            <input
              defaultValue={isGetData.address}
              type="text"
              className="form-control"
              placeholder="Calle, Numero, Colonia"
              autoComplete="off"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-danger">El dato es requerido</span>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>Ciudad</label>
            <input
              defaultValue={isGetData.city}
              type="text"
              className="form-control"
              placeholder="Ciudad"
              autoComplete="off"
              {...register("city", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z\sÀ-ÖØ-öø-ÿ]+$/,
                },
              })}
            />
            {errors.city && (
              <span className="text-danger">
                El dato es requerido y no se aceptan números{" "}
              </span>
            )}
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPhone">Teléfono</label>
            <input
              defaultValue={isGetData.phoneNumber}
              type="number"
              className="form-control"
              placeholder="Numero de telefono"
              autoComplete="off"
              {...register("phoneNumber", {
                required: true,
                pattern: {
                  value: /^[0-9]{10}$/,
                },
              })}
            />
            {errors.phoneNumber && (
              <span className="text-danger">
                Ingrese exactamente 10 números
              </span>
            )}
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Correo</label>
            <input
              defaultValue={isGetData.email}
              type="email"
              className="form-control"
              autoComplete="off"
              placeholder="Agregar su email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$$/,
                },
              })}
            />
            {errors.email && (
              <span className="text-danger">Formato de correo inválido</span>
            )}
          </div>
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
