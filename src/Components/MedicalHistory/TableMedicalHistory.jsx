import { useContext, useState } from "react";
import "../../Css/TableGenericCss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetTheAppContext } from "../../Context/AppContext";
import { ModalMedicalHistory } from "./ModalMedicalHistory";
import { ModalDelete } from "../../ModalDelete/ModalDelete";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { statusOk } from "../HttpStatus/HTTPStatusCode";

import {
  faCheck,
  faFilter,
  faMinus,
  faPen,
  faTrashCan,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export const TableMedicalHistory = ({ dataTable }) => {
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

  const [showModalDelete, setShowModalDelete] = useState(false);

  const showModalDeleteFuntion = () => {
    setShowModalDelete(true);
  };

  const closeModalDeleteFuntion = () => {
    setShowModalDelete(false);
  };

  const [showFamilyHistory, setShowFamilyHistory] = useState(false);
  const [showPathologicalHistory, setShowPathologicalHistory] = useState(false);
  const [showNonPathologicalHistory, setShowNonPathologicalHistory] =
    useState(false);

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

  const AddNewMedicalHistory = () => {
    return (
      <>
        <div>
          <h1>Historial Médico</h1>
        </div>
        <div className="col-12 d-flex flex-row-reverse ">
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
              <FontAwesomeIcon icon={faUserPlus} style={{ height: "18px" }} />
            </Button>
          </OverlayTrigger>
        </div>
      </>
    );
  };

  const MedicalHistoryTable = () => {
    return (
      <div id="tableConteiner" className="shadow bg-body rounded">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th id="responsiveTextTable">Paciente</th>
              <th id="responsiveTextTable">
                Heredo <br /> familiares
              </th>
              <th id="responsiveTextTable">Patológicos</th>
              <th id="responsiveTextTable">No patológicos</th>
              <th id="btnActionTable">Acciones</th>
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
                  showNonPathologicalHistory && field.nonPathologicalHistory;

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
              .map((infoMedicalHistory) => (
                <tr key={infoMedicalHistory.id}>
                  <td id="responsiveTextTable" className="pt-2">
                    {infoMedicalHistory.patient.name}
                  </td>
                  <td className="pt-2">
                    {infoMedicalHistory.familyMedicalHistory === true ? (
                      <div className="text-success d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#93c896" }}
                        />
                      </div>
                    ) : (
                      <div className="text-success d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon
                          icon={faMinus}
                          style={{ color: "#5c6bc0" }}
                        />
                      </div>
                    )}
                  </td>

                  <td className="pt-2">
                    {infoMedicalHistory.pathologicalHistory === true ? (
                      <div className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#93c896" }}
                        />
                      </div>
                    ) : (
                      <div className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon
                          icon={faMinus}
                          style={{ color: "#5c6bc0" }}
                        />
                      </div>
                    )}
                  </td>
                  <td className="pt-2">
                    {infoMedicalHistory.nonPathologicalHistory === true ? (
                      <div className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#93c896" }}
                        />
                      </div>
                    ) : (
                      <div className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon
                          icon={faMinus}
                          style={{ color: "#5c6bc0" }}
                        />
                      </div>
                    )}
                  </td>

                  <td id="btnActionTable" className="td-actions text-center">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-clear">Editar</Tooltip>}
                    >
                      <button
                        type="button"
                        rel="tooltip"
                        className="btn btn btn-primary btn-round btn-just-icon btn-sm m-1"
                        onClick={() => {
                          setActionButtonModal("Editar");
                          handleShowModal();
                          setGetDataFromTable(infoMedicalHistory);
                          setDataMedicalHistory(infoMedicalHistory);
                        }}
                      >
                        <FontAwesomeIcon id="btnTable" icon={faPen} />
                      </button>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-clear">Eliminar</Tooltip>}
                    >
                      <button
                        type="button"
                        rel="tooltip"
                        className="btn btn-danger btn-round btn-just-icon btn-sm"
                        onClick={() => {
                          setDataMedicalHistory(infoMedicalHistory);
                          showModalDeleteFuntion();
                        }}
                      >
                        <FontAwesomeIcon id="btnTable" icon={faTrashCan} />
                      </button>
                    </OverlayTrigger>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        {Array.isArray(dataTable) ? (
          <>
            <div className="container mb-3 row">
              <div className="container mb-3">
                <AddNewMedicalHistory />

                <div className="row cont-filtros">
                  <div className="col-md-12 col-lg-2 mb-3">
                    <h4>Nombre</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
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
                  </div>

                  <div className="marginCheckBox form-check form-switch col-md-4 col-lg-3">
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

                  <div className="marginCheckBox form-check form-switch col-md-4 col-lg-3 ">
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

                  <div className="marginCheckBox form-check form-switch col-md-4 col-lg-3">
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

                  <div className="mt-1 ml-4 col-md-1 d-flex">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-clear">Limpiar</Tooltip>}
                    >
                      <button
                        id="iconoClear"
                        className="btn"
                        type="button"
                        onClick={clear}
                      >
                        <FontAwesomeIcon
                          color="#fff"
                          icon={faFilter}
                          style={{ height: "18px" }}
                        />
                      </button>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>

            <MedicalHistoryTable />
          </>
        ) : (
          <div>
            <h3>Falla en la conexion con la base de datos</h3>
          </div>
        )}
      </div>

      <ModalMedicalHistory show={showModal} handleClose={handleCloseModal} />

      <ModalDelete
        show={showModalDelete}
        handleClose={closeModalDeleteFuntion}
        funtionToDeleted={funtionToDeleted}
        messageToDelete={"¿Está seguro de que desea eliminar este historial?"}
      />
    </>
  );
};
