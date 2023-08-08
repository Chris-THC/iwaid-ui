import React, { useContext, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
import { TypeaheadPatient } from "./Typeahead/TypeaheadPatient";

export const FormMedicalHistory = ({ isGetData = {} }) => {
  const [isSelectedFamilyMedicalHistory, setIsSelectedFamilyMedicalHistory] =
    useState(false);

  const [isSelectedPathologicalHistory, setIsSelectedPathologicalHistory] =
    useState(false);

  const [isSelectedNoPathologicalHistory, setIsSelectedNoPathologicalHistory] =
    useState(false);

  const {
    handleCloseModal,
    actionButtonModal,
    // handleShowFloatAlter,
    // setTextAlert,
    setGetDataFromTable,
    dataMedicalHistory,
    getAllPatientsData,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const deselectFamilyMedicalHistory = () => {
    if (isGetData.familyMedicalHistory === true) {
      setIsSelectedFamilyMedicalHistory(true);
    } else if (isGetData.familyMedicalHistory === false) {
      setIsSelectedFamilyMedicalHistory(false);
    }
  };
  const deselectPathologicalHistory = () => {
    if (isGetData.pathologicalHistory === true) {
      setIsSelectedPathologicalHistory(true);
    } else if (isGetData.pathologicalHistory === false) {
      setIsSelectedPathologicalHistory(false);
    }
  };
  const deselectNonPathologicalHistory = () => {
    if (isGetData.nonPathologicalHistory === true) {
      setIsSelectedNoPathologicalHistory(true);
    } else if (isGetData.nonPathologicalHistory === false) {
      setIsSelectedNoPathologicalHistory(false);
    }
  };

  useEffect(() => {
    deselectFamilyMedicalHistory();
    deselectPathologicalHistory();
    deselectNonPathologicalHistory();
  }, []);

  const onSubmitClick = async (data) => {
    data.patientsId = dataMedicalHistory.patient.id;

    if (typeof data.specificFamilyMedicalHistory === "undefined") {
      data.specificFamilyMedicalHistory =
        dataMedicalHistory.specificFamilyMedicalHistory;
    }
    if (typeof data.specificPathologicalHistory === "undefined") {
      data.specificPathologicalHistory =
        dataMedicalHistory.specificPathologicalHistory;
    }
    if (typeof data.specificNonPathologicalHistory === "undefined") {
      data.specificNonPathologicalHistory =
        dataMedicalHistory.specificNonPathologicalHistory;
    }

    if (actionButtonModal === "Agregar") {
      if (typeof data.specificFamilyMedicalHistory === "undefined") {
        data.specificFamilyMedicalHistory =
          dataMedicalHistory.specificFamilyMedicalHistory = "";
      }
      if (typeof data.specificPathologicalHistory === "undefined") {
        data.specificPathologicalHistory =
          dataMedicalHistory.specificPathologicalHistory = "";
      }
      if (typeof data.specificNonPathologicalHistory === "undefined") {
        data.specificNonPathologicalHistory =
          dataMedicalHistory.specificNonPathologicalHistory = "";
      }

      handleCloseModal();
      // const createNewPrescription = await createPrescriptionFunction(data);

      // if (createNewPrescription.status === statusCreated) {
      //   await allPrescriptionsFromApiFunction(setAllPrescriptionsData);

      //   console.log(allPrescriptionsData);
      //   setTextAlert("Preinscripción medica agregada exitosamente");
      //   handleShowFloatAlter();
      // } else {
      //   setTextAlert("Error al agregar la preinscripción medica");
      //   handleShowFloatAlter();
      // }
    } else if (actionButtonModal === "Editar") {
      handleCloseModal();
      // if (data.patientId === "" || data.doctorId === "") {
      //   data.patientId = dataPrescription.patientId;
      //   data.doctorId = dataPrescription.doctorId;
      // } else {
      //   data.patientId = prescriptionPatientId;
      //   data.doctorId = prescriptionDoctorId;
      // }

      // const responseUpdatePrescription = await updatePrescriptionFunction(
      //   data,
      //   dataPrescription.id
      // );

      // if (responseUpdatePrescription.status === statusDeleted) {
      //   setTextAlert(
      //     `Preinscripción de ${dataPrescription.patient.name} se ha actualizado exitosamente`
      //   );
      //   await allPrescriptionsFromApiFunction(setAllPrescriptionsData);
      //   handleShowFloatAlter();
      // } else {
      //   setTextAlert("Error al actualizar la preinscripción");
      //   handleShowFloatAlter();
      // }
    }

    console.log(data);
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
                defaultChecked={isGetData.familyMedicalHistory}
                type="radio"
                className="form-check-input"
                id="si"
                value={true}
                {...register("familyMedicalHistory")}
                onChange={() => setIsSelectedFamilyMedicalHistory(true)}
              />
              <label className="form-check-label" htmlFor="si">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                defaultChecked={!isGetData.familyMedicalHistory}
                type="radio"
                className="form-check-input"
                id="no"
                value={false}
                {...register("familyMedicalHistory")}
                onChange={() => {
                  setIsSelectedFamilyMedicalHistory(false);
                  dataMedicalHistory.specificFamilyMedicalHistory = "";
                }}
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
            <label>Especificación</label>
            <textarea
              defaultValue={dataMedicalHistory.specificFamilyMedicalHistory}
              type="text"
              rows={2}
              className="form-control"
              placeholder="Especificación de antecedentes heredofamiliares"
              autoComplete="off"
              {...register("specificFamilyMedicalHistory", { required: false })}
              disabled={!isSelectedFamilyMedicalHistory}
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
                defaultChecked={isGetData.pathologicalHistory}
                type="radio"
                className="form-check-input"
                id="si"
                value={true}
                {...register("pathologicalHistory")}
                onChange={() => setIsSelectedPathologicalHistory(true)}
              />
              <label className="form-check-label" htmlFor="si">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                defaultChecked={!isGetData.pathologicalHistory}
                type="radio"
                className="form-check-input"
                id="no"
                value={false}
                {...register("pathologicalHistory")}
                onChange={() => {
                  dataMedicalHistory.specificPathologicalHistory = "";
                  setIsSelectedPathologicalHistory(false);
                }}
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
            <label>Especificación</label>
            <textarea
              defaultValue={isGetData.specificPathologicalHistory}
              type="text"
              rows={2}
              className="form-control"
              placeholder="Especificación"
              autoComplete="off"
              {...register("specificPathologicalHistory", { required: false })}
              disabled={!isSelectedPathologicalHistory}
            />
            {errors.specificFamilyMedicalHistory && (
              <span className="text-danger">Dato requerido</span>
            )}
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group">
            <label>¿Tiene antecedentes no patológicos?</label>
            <div className="form-check">
              <input
                defaultChecked={isGetData.nonPathologicalHistory}
                type="radio"
                className="form-check-input"
                id="si"
                value={true}
                {...register("nonPathologicalHistory")}
                onChange={() => setIsSelectedNoPathologicalHistory(true)}
              />
              <label className="form-check-label" htmlFor="si">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                defaultChecked={!isGetData.nonPathologicalHistory}
                type="radio"
                className="form-check-input"
                id="no"
                value={false}
                {...register("nonPathologicalHistory")}
                onChange={() => {
                  dataMedicalHistory.specificNonPathologicalHistory = "";
                  setIsSelectedNoPathologicalHistory(false);
                }}
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
            <label>Especificación</label>
            <textarea
              defaultValue={isGetData.specificNonPathologicalHistory}
              type="text"
              rows={2}
              className="form-control"
              placeholder="Especificación"
              autoComplete="off"
              {...register("specificNonPathologicalHistory", {
                required: false,
              })}
              disabled={!isSelectedNoPathologicalHistory}
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
