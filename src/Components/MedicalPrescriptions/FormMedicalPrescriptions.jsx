import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
import { TypeaheadPatient } from "./PrescriptionTypeahead/TypeaheadPatient";
import { TypeaheadDoctor } from "./PrescriptionTypeahead/TypeaheadDoctor";
import { statusCreated, statusOk } from "../HttpStatus/HTTPStatusCode";

export const FormMedicalPrescriptions = ({ isGetData = {} }) => {
  const {
    handleCloseModal,
    actionButtonModal,
    handleShowFloatAlter,
    setTextAlert,
    setGetDataFromTable,
    getAllPatientsData,
    dataGetAllDoctors,
    prescriptionPatientId,
    prescriptionDoctorId,
    createPrescriptionFunction,
    setAllPrescriptionsData,
    allPrescriptionsFromApiFunction,
    updatePrescriptionFunction,
    dataPrescription,
    token,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const getMessageForAlert = () => {
    if (actionButtonModal === "Agregar") {
      return setTextAlert("Prescripción médica agregada exitosamente");
    } else if (actionButtonModal === "Editar") {
      return setTextAlert(
        `Prescripción de ${dataPrescription.patient.name} se ha actualizado exitosamente`
      );
    }
    return "";
  };

  const createPrescription = async (data) => {
    handleCloseModal();
    const newPrescription = await createPrescriptionFunction(data, token);

    if (newPrescription.status === statusCreated) {
      await allPrescriptionsFromApiFunction(setAllPrescriptionsData, token);

      getMessageForAlert();

      handleShowFloatAlter();
    } else {
      setTextAlert("Error al agregar la prescripción médica");

      handleShowFloatAlter();
    }
  };

  const updatePrescription = async (data) => {
    handleCloseModal();
    if (data.patientId === "" || data.doctorId === "") {
      data.patientId = dataPrescription.patientId;
      data.doctorId = prescriptionDoctorId;
    } else {
      data.patientId = prescriptionPatientId;
      data.doctorId = prescriptionDoctorId;
    }

    const updatePrescription = await updatePrescriptionFunction(
      data,
      dataPrescription.id,
      token
    );

    if (updatePrescription.status === statusOk) {
      getMessageForAlert();

      await allPrescriptionsFromApiFunction(setAllPrescriptionsData, token);

      handleShowFloatAlter();
    } else {
      setTextAlert("Error al actualizar la prescripción");
      handleShowFloatAlter();
    }
  };

  const onSubmitClick = async (data) => {
    data.patientId = prescriptionPatientId;
    data.doctorId = prescriptionDoctorId;

    if (actionButtonModal === "Agregar") {
      createPrescription(data);
    } else if (actionButtonModal === "Editar") {
      updatePrescription(data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitClick)}>
        <div className="form-row">
          <div className="row">
            <div className="form-group col-md-4 mb-2">
              <label>Paciente</label>
              <TypeaheadPatient infoPatients={getAllPatientsData} />
            </div>
            <div className="form-group col-md-4 mb-2">
              <label>Médico</label>
              <TypeaheadDoctor infoDoctors={dataGetAllDoctors} />
            </div>

            <div className="form-group col-md-3 mb-2">
              <label>Fecha de Asignación</label>
              <input
                defaultValue={isGetData.registerDate}
                type="date"
                className="form-control"
                autoComplete="off"
                {...register("registerDate", {
                  required: true,
                })}
              />
              {errors.date && (
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
            <button
              type="button"
              className="btn btn btn-light  btn-outline-danger"
              onClick={() => {
                handleCloseModal();
                setGetDataFromTable({});
              }}
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
