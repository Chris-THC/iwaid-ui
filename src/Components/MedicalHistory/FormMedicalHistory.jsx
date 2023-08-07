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
              <span className="text-danger">*</span>
              <TypeaheadPatient infoPatients={getAllPatientsData} />
            </div>

            <div className="form-group col-md-6 mb-3">
              <label htmlFor="inputPhone">Altura (cm)</label>
              <span className="text-danger">*</span>
              <input
                type="tel"
                className="form-control"
                placeholder="Altura en (cm)"
                autoComplete="off"
                {...register("height", {
                  required: true,
                  pattern: /^[0-9]+$/,
                  minLength: 3,
                  maxLength: 3,
                })}
                defaultValue={isGetData.height}
              />
              {errors.height?.type === "required" && (
                <span className="text-danger">Dato requerido</span>
              )}
              {errors.height?.type === "pattern" && (
                <span className="text-danger">Ingrese solo números</span>
              )}
              {errors.height?.type === "minLength" && (
                <span className="text-danger">
                  Debe tener al menos 3 dígitos
                </span>
              )}
              {errors.height?.type === "maxLength" && (
                <span className="text-danger">Máximo 3 dígitos</span>
              )}
            </div>

            <div className="form-group col-md-6 mb-3">
              <label htmlFor="inputPhone">Peso (kg)</label>
              <span className="text-danger">*</span>
              <input
                type="text"
                className="form-control"
                placeholder="Peso en (kg)"
                autoComplete="off"
                {...register("weight", {
                  required: true,
                  pattern: /^(?!.*\..*\..*)(?:\d{1,3}(?:\.\d{0,2})?)?$/, // Expresión regular ajustada
                })}
                defaultValue={isGetData.weight}
              />
              {errors.weight?.type === "required" && (
                <span className="text-danger">Dato requerido</span>
              )}
              {errors.weight?.type === "pattern" && (
                <span className="text-danger">Ingrese un número válido</span>
              )}
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group">
            <label>Antecedentes heredofamiliares</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="si"
                value="Si"
                {...register("antecedentes", { required: true })}
              />
              <label className="form-check-label" htmlFor="si">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="no"
                value="No"
                {...register("antecedentes", { required: true })}
              />
              <label className="form-check-label" htmlFor="no">
                No
              </label>
            </div>
            {errors.antecedentes && (
              <div className="text-danger">Este campo es requerido</div>
            )}
          </div>
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
