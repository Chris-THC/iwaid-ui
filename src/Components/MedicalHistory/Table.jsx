import React, { useContext, useState } from "react";
import { ModalMedicalHistory } from "./ModalMedicalHistory";
import { GetTheAppContext } from "../../Context/AppContext";
import "../../Css/TableMedicalHistory.css";
import { MdDeleteForever } from "react-icons/md";
import { FcCheckmark, FcMinus } from "react-icons/fc";
import { BsPersonFillAdd, BsPencilFill } from "react-icons/bs";
import { LuFilterX } from "react-icons/lu";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ModalDelete } from "../../ModalDelete/ModalDelete";
import { statusOk } from "../HttpStatus/HTTPStatusCode";

export const Table = ({ dataTable }) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showFamilyHistory, setShowFamilyHistory] = useState(false);
  const [showPathologicalHistory, setShowPathologicalHistory] = useState(false);
  const [showNonPathologicalHistory, setShowNonPathologicalHistory] =
    useState(false);

  const showModalDeleteFuntion = () => {
    setShowModalDelete(true);
  };

  const closeModalDeleteFuntion = () => {
    setShowModalDelete(false);
  };

  const {
    handleShowModal,
    handleCloseModal,
    showModal,
    setGetDataFromTable,
    setActionButtonModal,
    setDataMedicalHistory,
    setTextAlert,
    handleShowFloatAlter,
    deleteHistoryFunction,
    dataMedicalHistory,
    setAllMedicalHistoryData,
    allHistoryFromApiFunction,
  } = useContext(GetTheAppContext);

  const [searchByName, setSearchByName] = useState("");

  const clear = () => {
    setSearchByName("");
    setShowFamilyHistory(false);
    setShowPathologicalHistory(false);
    setShowNonPathologicalHistory(false);
  };

  const funtionToDeleted = async () => {
    setActionButtonModal("Eliminar");
    const response = await deleteHistoryFunction(dataMedicalHistory.id);

    if (response.status === statusOk) {
      await allHistoryFromApiFunction(setAllMedicalHistoryData);
      closeModalDeleteFuntion();
      setTextAlert(
        `Se eliminó el historial médico del paciente ${dataMedicalHistory.patient.name}`
      );
      handleShowFloatAlter();
    } else {
      closeModalDeleteFuntion();
      setTextAlert("Error al eliminar la preinscripción");
      handleShowFloatAlter();
    }
  };

  return (
    <div className="container mt-5">
      <div className=" card mt-4 row ">
        <div className="card-header d-flex">
          <div className="col-8">
            <h2 className="card-title">Historial Médico</h2>
          </div>

          <div className="col-4 d-flex flex-row-reverse ">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-clear">Agregar</Tooltip>}
            >
              <Button
                id="btnAdd"
                className="ms-2 me-2 mb-1"
                variant="primary"
                onClick={() => {
                  setDataMedicalHistory({});
                  handleShowModal();
                  setActionButtonModal("Agregar");
                }}
              >
                <BsPersonFillAdd size={18} />
              </Button>
            </OverlayTrigger>
          </div>
        </div>

        <div className="card-header col-md-12">
          <div className=" card-body table-responsive">
            <div className="container mb-3">
              <div className="row">
                <h4 className="col-md-6">Buscar</h4>
                <h4 id="titleMedicalHistoriId" className="col-md-6">
                  Antecedentes
                </h4>
              </div>

              <div className="row">
                <div className="container mb-3">
                  <div className="row">
                    <div className="col-md-2 mb-2">
                      <label id="lableMedicalHistory">Paciente</label>
                      <input
                        id="lableMedicalHistory"
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        value={searchByName}
                        onChange={(e) => {
                          setSearchByName(e.target.value);
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[A-Za-z\s]+$"
                      />
                    </div>

                    <div className="form-check form-switch col-md-3 mt-4">
                      <label id="lableMedicalHistory" className="mb-2">
                        Heredofamiliares
                      </label>

                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={showFamilyHistory}
                        onChange={() => {
                          setShowFamilyHistory(!showFamilyHistory);
                          setShowPathologicalHistory(false);
                          setShowNonPathologicalHistory(false);
                          setSearchByName("");
                        }}
                      />
                    </div>

                    <div className="form-check form-switch col-md-3 mt-4">
                      <label id="lableMedicalHistory" className="mb-2">
                        Patológicos
                      </label>

                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={showPathologicalHistory}
                        onChange={() => {
                          setShowPathologicalHistory(!showPathologicalHistory);
                          setShowFamilyHistory(false);
                          setShowNonPathologicalHistory(false);
                          setSearchByName("");
                        }}
                      />
                    </div>

                    <div className="form-check form-switch col-md-3 mt-4">
                      <label id="lableMedicalHistory" className="mb-2">
                        No Patológicos
                      </label>

                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={showNonPathologicalHistory}
                        onChange={() => {
                          setShowNonPathologicalHistory(
                            !showNonPathologicalHistory
                          );
                          setShowFamilyHistory(false);
                          setShowPathologicalHistory(false);
                          setSearchByName("");
                        }}
                      />
                    </div>

                    <div className="col-md-1 d-flex flex-row-reverse ">
                      <div className="w-auto p-3">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="tooltip-clear">Limpiar</Tooltip>
                          }
                        >
                          <button
                            id="iconoClear"
                            className="btn btn-secondary"
                            type="button"
                            onClick={clear}
                          >
                            <LuFilterX color="white" />
                          </button>
                        </OverlayTrigger>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <table className="table table-bordered custom-table text-center">
              <thead>
                <tr>
                  <th>Paciente</th>

                  <th style={{ width: "20%" }}>
                    Antecedentes heredofamiliares
                  </th>

                  <th style={{ width: "20%" }}>Antecedentes patológicos</th>

                  <th style={{ width: "20%" }}>Antecedentes no patológicos</th>

                  <th style={{ width: "20%" }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {dataTable
                  .filter((field) => {
                    const patientNameMatches = field.patient.name
                      .toLowerCase()
                      .includes(searchByName.toLowerCase());

                    const familyHistoryMatches =
                      showFamilyHistory && field.familyMedicalHistory;
                    const pathologicalHistoryMatches =
                      showPathologicalHistory && field.pathologicalHistory;
                    const nonPathologicalHistoryMatches =
                      showNonPathologicalHistory &&
                      field.nonPathologicalHistory;

                    if (
                      !showFamilyHistory &&
                      !showPathologicalHistory &&
                      !showNonPathologicalHistory
                    ) {
                      return patientNameMatches;
                    }

                    return (
                      patientNameMatches &&
                      (familyHistoryMatches ||
                        pathologicalHistoryMatches ||
                        nonPathologicalHistoryMatches)
                    );
                  })
                  .map((field) => (
                    <tr key={field.id}>
                      <td className="pt-2">{field.patient.name}</td>
                      <td className="pt-2">
                        {field.familyMedicalHistory === true ? (
                          <p className="text-success">
                            <FcCheckmark />
                          </p>
                        ) : (
                          <p className="text-secondary">
                            <FcMinus />
                          </p>
                        )}
                      </td>

                      <td className="pt-2">
                        {field.pathologicalHistory === true ? (
                          <p className="text-success">
                            <FcCheckmark />
                          </p>
                        ) : (
                          <p className="text-secondary">
                            {" "}
                            <FcMinus />
                          </p>
                        )}
                      </td>
                      <td className="pt-2">
                        {field.nonPathologicalHistory === true ? (
                          <p className="text-success">
                            <FcCheckmark />
                          </p>
                        ) : (
                          <p className="text-secondary">
                            <FcMinus />
                          </p>
                        )}
                      </td>

                      <td>
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-clear">Editar</Tooltip>}
                        >
                          <Button
                            id="btnTables"
                            className="ms-2 me-2 mb-2 mt-2"
                            variant="primary"
                            onClick={() => {
                              handleShowModal();
                              setGetDataFromTable(field);
                              console.log(field);
                              setActionButtonModal("Editar");
                              setDataMedicalHistory(field);
                            }}
                          >
                            <BsPencilFill className="btn-icon-lg" />
                          </Button>
                        </OverlayTrigger>

                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="tooltip-clear">Eliminar</Tooltip>
                          }
                        >
                          <Button
                            size={16}
                            id="btnTables"
                            className="ms-2 me-2 mb-2 mt-2"
                            variant="danger"
                            onClick={() => {
                              setDataMedicalHistory(field);
                              showModalDeleteFuntion();
                            }}
                          >
                            <MdDeleteForever
                              size={13}
                              id="btnDeletePatient"
                              className="btn-icon-lg"
                            />
                          </Button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <ModalMedicalHistory
            show={showModal}
            handleClose={handleCloseModal}
          />

          <ModalDelete
            show={showModalDelete}
            handleClose={closeModalDeleteFuntion}
            funtionToDeleted={funtionToDeleted}
            messageToDelete={
              "¿Está seguro de que desea eliminar este historial?"
            }
          />
        </div>
      </div>
    </div>
  );
};
