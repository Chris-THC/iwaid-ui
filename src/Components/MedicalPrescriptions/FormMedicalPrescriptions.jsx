import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
import { TypeaheadPatient } from "./PrescriptionTypeahead/TypeaheadPatient";
import { TypeaheadDoctor } from "./PrescriptionTypeahead/TypeaheadDoctor";
import { TypeaheadMedicine } from "./PrescriptionTypeahead/TypeaheadMedicine";
export const FormMedicalPrescriptions = ({ isGetData = {} }) => {
  const currentDate = new Date().toISOString().split("T")[0];

  const {
    setDataMedicalPrescription,
    handleCloseModal,
    actionButtonModal,
    handleShowFloatAlter,
    setTextAlert,
    setGetDataFromTable,
    getAllPatientsData,
    dataGetAllDoctors,
    dataGetAllMedicine,
    prescriptionPatientId,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmitClick = (data) => {
    data.id = prescriptionPatientId;
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
            <div className="form-group col-md-4 mb-2">
              <label>Paciente</label>
              <TypeaheadPatient
                infoPatients={getAllPatientsData}
                patientUpdate={isGetData.nombre}
              />
            </div>
            <div className="form-group col-md-4 mb-2">
              <label>Medico</label>
              <TypeaheadDoctor
                infoDoctors={dataGetAllDoctors}
                doctorUpdate={isGetData.doctor}
              />
            </div>

            <div className="form-group col-md-4 mb-2">
              <label>Medicamentos</label>
              <TypeaheadMedicine
                infoMedicine={dataGetAllMedicine}
                medicineUpdate={isGetData.medicamentos}
              />
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-4 mb-2">
            <label>Fecha de Asignación</label>
            <input
              defaultValue={isGetData.fecha}
              type="date"
              className="form-control"
              autoComplete="off"
              {...register("fecha", {
                required: true,
                max: {
                  value: currentDate,
                },
              })}
            />
            {errors.fecha && (
              <span className="text-danger">
                El dato es requerido o la fecha no puede ser posterior a la
                fecha actual
              </span>
            )}
          </div>

          <div className="form-group col-md-4 mb-2">
            <label>Cantidad</label>
            <input
              defaultValue={isGetData.cantidad}
              type="text"
              className="form-control"
              placeholder="Cantidad"
              autoComplete="off"
              {...register("cantidad", { required: true })}
            />
            {errors.cantidad && (
              <span className="text-danger">Dato requerido</span>
            )}
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-12 mb-2 ">
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
