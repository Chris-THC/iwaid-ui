import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { GetTheAppContext } from "../../Context/AppContext";

export const FormDoctor = ({ isGetData = {} }) => {
  const {
    handleShowFloatAlter,
    handleCloseModal,
    actionButtonModal,
    setTextAlert,
    setGetDataFromTable,
    createDoctorFunction,
    getAllDoctorsDataFunction,
    setGetDataAllDoctors,
    updateDoctorFunction,
    idDoctor,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmitClick = async (data) => {
    if (actionButtonModal === "Agregar") {
      handleCloseModal();

      try {
        await createDoctorFunction(data);
        await getAllDoctorsDataFunction(setGetDataAllDoctors);
        setTextAlert("Se Agregó un nuevo Doctor");
        handleShowFloatAlter();
      } catch (error) {
        console.error("Error al agregar el médico:", error);
        setTextAlert("Error al agregar el médico");
        handleShowFloatAlter();
      }
    } else if (actionButtonModal === "Editar") {
      handleCloseModal();
      setTextAlert("Se Edito un Doctor");
      console.log(data);
      alert("Datos del Doctor editados");

      try {
        await updateDoctorFunction(data, idDoctor);
        await getAllDoctorsDataFunction(setGetDataAllDoctors);
      } catch (error) {
        console.error("Error al agregar el médico:", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitClick)}>
        <div className="form-group">
          <label>
            Nombre Completo
            <span className="text-danger">*</span>
          </label>
          <input
            defaultValue={isGetData.name}
            type="text"
            className="form-control"
            placeholder="Nombre Completo"
            autoComplete="off"
            {...register("name", {
              required: true,
              maxLength: 100,
              pattern: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/,
            })}
          />
          {errors.name && (
            <span className="text-danger">
              El dato es requerido y debe ser alfanumérico (máximo 100
              caracteres)
            </span>
          )}
        </div>

        <div className="form-group col-md-4">
          <label>
            Especialidad
            <span className="text-danger">*</span>
          </label>
          <select
            className="form-select"
            autoComplete="off"
            defaultValue={isGetData.specialty}
            {...register("specialty", { required: true })}
          >
            <option value="">Seleccione una opción</option>
            <option value="General">General</option>
            <option value="Urologia">Urología</option>
            <option value="Ginecologia">Ginecología</option>
            <option value="Pediatria">Pediatría</option>
            <option value="Neurologia">Neurología</option>
          </select>
          {errors.specialty && (
            <span className="text-danger">El dato es requerido</span>
          )}
        </div>

        <div className="form-group">
          <label>
            Dirección
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Calle, Número, Colonia"
            autoComplete="off"
            {...register("address", {
              required: true,
              maxLength: 500,
            })}
            defaultValue={isGetData.address}
          />
          {errors.address && (
            <span className="text-danger">
              El dato es requerido y debe ser alfanumérico (máximo 500
              caracteres)
            </span>
          )}
        </div>

        <div className="form-group">
          <label>
            Número Telefónico
            <span className="text-danger">*</span>
          </label>
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
            <span className="text-danger">
              El número de teléfono es requerido
            </span>
          )}
          {errors.phoneNumber?.type === "pattern" && (
            <span className="text-danger">Ingrese solo números</span>
          )}
          {errors.phoneNumber?.type === "minLength" && (
            <span className="text-danger">Debe tener al menos 10 dígitos</span>
          )}
          {errors.phoneNumber?.type === "maxLength" && (
            <span className="text-danger">Debe tener 10 dígitos</span>
          )}
        </div>

        <div className="form-group">
          <label>
            Correo Electrónico
            <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            autoComplete="off"
            placeholder="Agregar su correo electrónico"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            })}
            defaultValue={isGetData.email}
          />
          {errors.email?.type === "required" && (
            <span className="text-danger">
              El correo electrónico es requerido
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="text-danger">
              Ingrese un correo electrónico válido (ejemplo:
              ejemplo@example.com)
            </span>
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
