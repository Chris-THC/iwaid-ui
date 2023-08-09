import React, { useContext, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
import { TypeaheadPatient } from "./Typeahead/TypeaheadPatient";
import { statusCreated, statusUpdatedHistiry } from "../../Context/HTTPStatus";

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
    handleShowFloatAlter,
    setTextAlert,
    setGetDataFromTable,
    dataMedicalHistory,
    getAllPatientsData,
    patientHistoryId,
    createHistoryFunction,
    setAllMedicalHistoryData,
    allHistoryFromApiFunction,
    updateHistoryFunction,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const deselectHistory = (key, setIsSelected) => {
    if (key === true) {
      setIsSelected(true);
    } else if (key === false) {
      setIsSelected(false);
    }
  };

  useEffect(() => {
    deselectHistory(
      isGetData.familyMedicalHistory,
      setIsSelectedFamilyMedicalHistory
    );

    deselectHistory(
      isGetData.pathologicalHistory,
      setIsSelectedPathologicalHistory
    );

    deselectHistory(
      isGetData.nonPathologicalHistory,
      setIsSelectedNoPathologicalHistory
    );
  }, []);

  const getMessageForAlert = () => {
    if (actionButtonModal === "Agregar") {
      return setTextAlert("Historial médico agregado exitosamente");
    } else if (actionButtonModal === "Editar") {
      return setTextAlert(
        `El historial de ${dataMedicalHistory.patient.name} se ha actualizado exitosamente`
      );
    }
    return "";
  };

  const onSubmitClick = async (data) => {
    data.patientId = patientHistoryId;

    const properties = [
      "specificFamilyMedicalHistory",
      "specificPathologicalHistory",
      "specificNonPathologicalHistory",
    ];

    for (const prop of properties) {
      if (typeof data[prop] === "undefined") {
        data[prop] = dataMedicalHistory[prop] = "";
      }
    }

    if (actionButtonModal === "Agregar") {
      handleCloseModal();
      const response = await createHistoryFunction(data);
      if (response.status === statusCreated) {
        await allHistoryFromApiFunction(setAllMedicalHistoryData);
        getMessageForAlert();
        handleShowFloatAlter();
      } else {
        setTextAlert("Error al agregar la prescripción médica");
        handleShowFloatAlter();
      }
    } else if (actionButtonModal === "Editar") {
      data.patientId = dataMedicalHistory.patient.id;
      console.log(data);
      handleCloseModal();
      const response = await updateHistoryFunction(data, dataMedicalHistory.id);
      console.log(response);
      if (response.status === statusUpdatedHistiry) {
        await allHistoryFromApiFunction(setAllMedicalHistoryData);
        getMessageForAlert();
        handleShowFloatAlter();
      } else {
        setTextAlert("Error al editar la prescripción médica");
        handleShowFloatAlter();
      }
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
            <label>Antecedentes heredofamiliares</label>
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
            <label>Especificación de antecedentes heredofamiliares</label>
            <textarea
              defaultValue={
                isSelectedFamilyMedicalHistory === true
                  ? dataMedicalHistory.specificFamilyMedicalHistory
                  : ""
              }
              type="text"
              rows={2}
              className="form-control"
              placeholder="Especificación"
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
            <label>Antecedentes patológicos</label>
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
            <label>Especificación de antecedentes patológicos</label>
            <textarea
              defaultValue={
                isSelectedPathologicalHistory === true
                  ? dataMedicalHistory.specificPathologicalHistory
                  : ""
              }
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
            <label>Antecedentes no patológicos</label>
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
            <label>Especificación de antecedentes no patológicos </label>
            <textarea
              defaultValue={
                isSelectedNoPathologicalHistory === true
                  ? dataMedicalHistory.specificNonPathologicalHistory
                  : ""
              }
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
