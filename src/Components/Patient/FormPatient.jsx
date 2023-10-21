import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
import { statusCreated, statusOk } from "../HttpStatus/HTTPStatusCode";
export const FormPatient = ({ isGetData = {} }) => {
  const currentDate = new Date().toISOString().split("T")[0];

  const {
    handleCloseModal,
    actionButtonModal,
    setTextAlert,
    handleShowFloatAlter,
    setGetDataFromTable,
    createPatientFunction,
    getAllPatientDataFunction,
    updatePatientFunction,
    setGetAllPatientsData,
    patientId,
    token,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmitClick = async (data) => {
    if (actionButtonModal === "Agregar") {
      handleCloseModal();
      const CreatePatientResponse = await createPatientFunction(data, token);

      if (CreatePatientResponse.status === statusCreated) {
        await getAllPatientDataFunction(setGetAllPatientsData, token);
        setTextAlert("Paciente agregado exitosamente");
        handleShowFloatAlter();
      } else {
        setTextAlert("Error al agregar al paciente");
        handleShowFloatAlter();
      }
    } else if (actionButtonModal === "Editar") {
      handleCloseModal();
      const updatePatientResponse = await updatePatientFunction(
        data,
        patientId,
        token
      );

      if (updatePatientResponse.status === statusOk) {
        setTextAlert(`Paciente ${data.name} actualizado exitosamente`);
        await getAllPatientDataFunction(setGetAllPatientsData, token);
        handleShowFloatAlter();
      } else {
        setTextAlert("Error al actualizar al paciente");
        handleShowFloatAlter();
      }
    }
  };

  const [rfcValue, setRfcValue] = useState(isGetData.rfc || "");
  const [rfcError, setRfcError] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toUpperCase();
    setRfcValue(inputValue);
    setValue("rfc", inputValue);
    const rfcPattern = /^[A-Z]{4}\d{6}[A-Z\d]{3}$/;
    if (!rfcPattern.test(inputValue)) {
      setRfcError("El RFC debe tener un formato válido");
    } else {
      setRfcError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitClick)}>
        <div className="form-row">
          <div className="form-group col-md-12 mb-3">
            <label>Nombre Completo</label>
            <span className="text-danger">*</span>
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
                Dato requerido o solo acepta letras
              </span>
            )}
          </div>

          <div className="form-group row">
            <div className="form-group col-md-5">
              <label>Fecha de Nacimiento</label>
              <span className="text-danger">*</span>
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
                  Dato requerido o la fecha no puede ser mayor a la fecha actual
                </span>
              )}
            </div>

            <div className="form-group col-md-7 mb-3">
              <label>Género</label>
              <span className="text-danger">*</span>
              <select
                defaultValue={isGetData.gender}
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
                <span className="text-danger">Dato requerido</span>
              )}
            </div>
          </div>
        </div>

        <div className="form-group row ">
          <div className="form-group col-md-6 mb-3">
            <label>RFC</label>
            <span className="text-danger">*</span>
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

          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputPhone">Teléfono</label>
            <span className="text-danger">*</span>
            <input
              type="tel"
              className="form-control"
              placeholder="Número de teléfono"
              autoComplete="off"
              {...register("phoneNumber", {
                required: true,
                pattern: /^[0-9]+$/,
                minLength: 10,
                maxLength: 10,
              })}
              defaultValue={isGetData.phoneNumber}
            />
            {errors.phoneNumber?.type === "required" && (
              <span className="text-danger">Dato requerido</span>
            )}
            {errors.phoneNumber?.type === "pattern" && (
              <span className="text-danger">Ingrese solo números</span>
            )}
            {errors.phoneNumber?.type === "minLength" && (
              <span className="text-danger">
                Debe tener al menos 10 dígitos
              </span>
            )}
            {errors.phoneNumber?.type === "maxLength" && (
              <span className="text-danger">Máximo 10 dígitos</span>
            )}
          </div>

          <div className="form-group col-md-8 mb-3">
            <label>Dirección</label>
            <span className="text-danger">*</span>
            <input
              defaultValue={isGetData.address}
              type="text"
              className="form-control"
              placeholder="Calle, Numero, Colonia"
              autoComplete="off"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-danger">Dato requerido</span>
            )}
          </div>

          <div className="form-group col-md-4 mb-3">
            <label>Ciudad</label>
            <span className="text-danger">*</span>
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
                Dato requerido y no se aceptan números{" "}
              </span>
            )}
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputEmail">Correo</label>
            <span className="text-danger">*</span>
            <input
              defaultValue={isGetData.email}
              type="email"
              className="form-control"
              autoComplete="off"
              placeholder="example@ex.com"
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

          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputPhone">Contraseña</label>
            <span className="text-danger">*</span>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              autoComplete="off"
              {...register("password", {
                required: true,
              })}
              defaultValue={isGetData.password}
            />
            {errors.phoneNumber?.type === "required" && (
              <span className="text-danger">Dato requerido</span>
            )}
          </div>
        </div>

        <div>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn btn-light  btn-outline-danger"
              onClick={handleCloseModal}
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
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
