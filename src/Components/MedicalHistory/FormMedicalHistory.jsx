import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
import { TypeaheadPatient } from "./Typeahead/TypeaheadPatient";

export const FormMedicalHistory = ({ isGetData = {} }) => {
  const [
    isSiSelectedFamilyMedicalHistory,
    setIsSiSelectedFamilyMedicalHistory,
  ] = useState(false);

  const [isSiSelectedPathologicalHistory, setIsSiSelectedPathologicalHistory] =
    useState(false);

  const [
    isSiSelectedNoPathologicalHistory,
    setIsSiSelectedNoPathologicalHistory,
  ] = useState(false);

  const {
    handleCloseModal,
    actionButtonModal,
    // handleShowFloatAlter,
    // setTextAlert,
    setGetDataFromTable,
    getAllPatientsData,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmitClick = async (data) => {
    console.log(data);
    handleCloseModal();
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

            <div className="form-group col-md-4 mb-3">
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

            <div className="form-group col-md-4 mb-3">
              <label htmlFor="inputPhone">Peso (kg)</label>
              <span className="text-danger">*</span>
              <input
                type="text"
                className="form-control"
                placeholder="Peso en (kg)"
                autoComplete="off"
                {...register("weight", {
                  required: true,
                  pattern: /^(?!.*\..*\..*)(?:\d{1,3}(?:\.\d{0,2})?)?$/,
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
            <label>¿Tiene antecedentes heredofamiliares?</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="si"
                value={true}
                {...register("familyMedicalHistory")}
                onChange={() => setIsSiSelectedFamilyMedicalHistory(true)}
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
                value={false}
                {...register("familyMedicalHistory")}
                onChange={() => setIsSiSelectedFamilyMedicalHistory(false)}
              />
              <label className="form-check-label" htmlFor="no">
                No
              </label>
            </div>
            {errors.familyMedicalHistory && (
              <div className="text-danger">Dato requerido</div>
            )}
          </div>
          <div className="form-group col-md-12 mb-2 ">
            <label>Especificación de antecedentes heredofamiliares</label>
            <textarea
              defaultValue={isGetData.specificFamilyMedicalHistory}
              type="text"
              rows={2}
              className="form-control"
              placeholder="Especificación de antecedentes heredofamiliares"
              autoComplete="off"
              {...register("specificFamilyMedicalHistory", { required: false })}
              disabled={!isSiSelectedFamilyMedicalHistory}
            />
            {errors.specificFamilyMedicalHistory && (
              <span className="text-danger">Dato requerido</span>
            )}
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group">
            <label>¿Tiene antecedentes patológicos?</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="si"
                value={true}
                {...register("pathologicalHistory", { required: true })}
                onChange={() => setIsSiSelectedPathologicalHistory(true)}
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
                value={false}
                {...register("pathologicalHistory", { required: true })}
                onChange={() => setIsSiSelectedPathologicalHistory(false)}
              />
              <label className="form-check-label" htmlFor="no">
                No
              </label>
            </div>
            {errors.pathologicalHistory && (
              <div className="text-danger">Dato requerido</div>
            )}
          </div>
          <div className="form-group col-md-12 mb-2 ">
            <label>Especificación de antecedentes patológicos</label>
            <textarea
              defaultValue={isGetData.specificPathologicalHistory}
              type="text"
              rows={2}
              className="form-control"
              placeholder="Especificación de antecedentes patológicos"
              autoComplete="off"
              {...register("specificPathologicalHistory", { required: false })}
              disabled={!isSiSelectedPathologicalHistory}
            />
            {errors.specificPathologicalHistory && (
              <span className="text-danger">Dato requerido</span>
            )}
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group">
            <label>¿Tiene antecedentes no patológicos?</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="si"
                value={true}
                {...register("nonPathologicalHistory", { required: true })}
                onChange={() => setIsSiSelectedNoPathologicalHistory(true)}
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
                value={false}
                {...register("nonPathologicalHistory", { required: true })}
                onChange={() => setIsSiSelectedNoPathologicalHistory(false)}
              />
              <label className="form-check-label" htmlFor="no">
                No
              </label>
            </div>
            {errors.nonPathologicalHistory && (
              <div className="text-danger">Dato requerido</div>
            )}
          </div>

          <div className="form-group col-md-12 mb-2 ">
            <label>Especificación de antecedentes no patológicos</label>
            <textarea
              defaultValue={isGetData.specificNonPathologicalHistory}
              type="text"
              rows={2}
              className="form-control"
              placeholder="Especificación de antecedentes no patológicos"
              autoComplete="off"
              {...register("specificNonPathologicalHistory", {
                required: false,
              })}
              disabled={!isSiSelectedNoPathologicalHistory}
            />
            {errors.specificNonPathologicalHistory && (
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
