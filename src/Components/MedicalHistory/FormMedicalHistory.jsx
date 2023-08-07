import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
import { TypeaheadPatient } from "./Typeahead/TypeaheadPatient";
import { TypeaheadDoctor } from "./Typeahead/TypeaheadDoctor";
// import { statusCreated } from "./HTTPstatus.js";
// import { statusDeleted } from "./HTTPstatus.js";

export const FormMedicalHistory = ({ isGetData = {} }) => {
  const currentDate = new Date().toISOString().split("T")[0];

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
    allPrescriptionsData,
    allPrescriptionsFromApiFunction,
    updatePrescriptionFunction,
    dataPrescription,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmitClick = async (data) => {
    console.log(data);
    // data.patientId = prescriptionPatientId;
    // data.doctorId = prescriptionDoctorId;

    // if (actionButtonModal === "Agregar") {
    //   handleCloseModal();
    //   const createNewPrescription = await createPrescriptionFunction(data);

    //   if (createNewPrescription.status === statusCreated) {
    //     await allPrescriptionsFromApiFunction(setAllPrescriptionsData);

    //     console.log(allPrescriptionsData);
    //     setTextAlert("Preinscripción medica agregada exitosamente");
    //     handleShowFloatAlter();
    //   } else {
    //     setTextAlert("Error al agregar la preinscripción medica");
    //     handleShowFloatAlter();
    //   }
    // } else if (actionButtonModal === "Editar") {
    //   handleCloseModal();
    //   if (data.patientId === "" || data.doctorId === "") {
    //     data.patientId = dataPrescription.patientId;
    //     data.doctorId = dataPrescription.doctorId;
    //   } else {
    //     data.patientId = prescriptionPatientId;
    //     data.doctorId = prescriptionDoctorId;
    //   }

    //   const responseUpdatePrescription = await updatePrescriptionFunction(
    //     data,
    //     dataPrescription.id
    //   );

    //   if (responseUpdatePrescription.status === statusDeleted) {
    //     setTextAlert(
    //       `Preinscripción de ${dataPrescription.patient.name} se ha actualizado exitosamente`
    //     );
    //     await allPrescriptionsFromApiFunction(setAllPrescriptionsData);
    //     handleShowFloatAlter();
    //   } else {
    //     setTextAlert("Error al actualizar la preinscripción");
    //     handleShowFloatAlter();
    //   }
    // }
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
