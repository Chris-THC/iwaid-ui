import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
export const FormMedicalPrescriptions = ({ isGetData = {} }) => {
  const {
    setDataMedicalPrescription,
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
    setDataMedicalPrescription(data);
    console.log(data);
    handleCloseModal();
    setTextAlert("Datos Guardados");
    handleShowFloatAlter();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitClick)}>
        <div className="form-row">
          <div className="row">
            <div className="form-group col-md-6">
              <label>Nombre Completo</label>
              <input
                defaultValue={isGetData.nombrePaciente}
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
            <div className="form-group col-md-6">
              <label>Medico</label>
              <input
                defaultValue={isGetData.medico}
                type="text"
                className="form-control"
                placeholder="Nombre del Medico"
                autoComplete="off"
                {...register("medico", { required: true })}
              />
              {errors.medico && (
                <span className="text-danger">El dato es requerido</span>
              )}
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-4">
            <label>Fecha de Asignación</label>
            <input
              defaultValue={isGetData.fecha}
              type="date"
              className="form-control"
              autoComplete="off"
              {...register("fecha", { required: true })}
            />
            {errors.fecha && (
              <span className="text-danger">El dato es requerido</span>
            )}
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-12">
            <label>Medicamentos Prescritos</label>
            <textarea
              defaultValue={isGetData.medicamentos}
              type="text"
              rows={5}
              className="form-control"
              placeholder="Detalles de los medicamentos prescritos"
              autoComplete="off"
              {...register("medicamentos", { required: true })}
            />
            {errors.medicamentos && (
              <span className="text-danger">El dato es requerido</span>
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
            >
              {actionButtonModal}
            </Button>
          </Modal.Footer>
        </div>
      </form>
    </div>
  );
};
