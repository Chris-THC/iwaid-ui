import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
import { TypeaheadPatient } from "./PrescriptionTypeahead/TypeaheadPatient";
import { TypeaheadDoctor } from "./PrescriptionTypeahead/TypeaheadDoctor";
export const FormMedicalPrescriptions = ({ isGetData = {} }) => {
  const currentDate = new Date().toISOString().split("T")[0];

  const {
    setMedicalPrescriptionData,
    handleCloseModal,
    actionButtonModal,
    handleShowFloatAlter,
    setTextAlert,
    setGetDataFromTable,
    getAllPatientsData,
    dataGetAllDoctors,
    prescriptionPatientId,
    prescriptionDoctorId,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmitClick = (data) => {
    data.patientId = prescriptionPatientId;
    data.doctorId = prescriptionDoctorId;
    setMedicalPrescriptionData(data);
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
                // patientUpdate={isGetData.patient.name}
              />
            </div>
            <div className="form-group col-md-4 mb-2">
              <label>Médico</label>
              <TypeaheadDoctor
                infoDoctors={dataGetAllDoctors}
                // doctorUpdate={isGetData.doctor.name}
              />
            </div>

            <div className="form-group col-md-3 mb-2">
              <label>Fecha de Asignación</label>
              <input
                defaultValue={isGetData.date}
                type="date"
                className="form-control"
                autoComplete="off"
                {...register("date", {
                  required: true,
                  max: {
                    value: currentDate,
                  },
                })}
              />
              {errors.fecha && (
                <span className="text-danger">
                  Dato requerido o la fecha no puede ser posterior a la fecha
                  actual
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-12 mb-2 ">
            <label>Medicamentos Prescritos</label>
            <textarea
              defaultValue={isGetData.description}
              type="text"
              rows={5}
              className="form-control"
              placeholder="Detalles de los medicamentos prescritos"
              autoComplete="off"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-danger">Dato requerido</span>
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
