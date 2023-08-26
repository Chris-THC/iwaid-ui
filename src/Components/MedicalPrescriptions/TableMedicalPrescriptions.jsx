import { useContext, useState } from "react";
import "../../Css/DoctorCss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetTheAppContext } from "../../Context/AppContext";
import { ModalMedicalPrescriptions } from "./ModalMedicalPrescriptions";
import { ModalDelete } from "../../ModalDelete/ModalDelete";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { statusOk } from "../HttpStatus/HTTPStatusCode";

import {
  faFilter,
  faPen,
  faTrashCan,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export const TableMedicalPrescriptions = ({ dataTable }) => {
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleShowModalDelete = () => {
    setShowModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
  };

  const {
    handleShowModal,
    handleCloseModal,
    showModal,
    setGetDataFromTable,
    setActionButtonModal,
    setDataPrescription,
    allPrescriptionsFromApiFunction,
    deletePrescriptionFunction,
    setAllPrescriptionsData,
    setTextAlert,
    handleShowFloatAlter,
    dataPrescription,
    setPrescriptionDoctorId,
  } = useContext(GetTheAppContext);

  const [searchByNamePatient, setSearchByNamePatient] = useState("");
  const [searchByDoctor, setSearchByDoctor] = useState("");
  const [searchByStartDate, setSearchByStartDate] = useState("");
  const [searchByFinalDate, setSearchByFinalDate] = useState("");

  const handleClear = () => {
    setSearchByNamePatient("");
    setSearchByDoctor("");
    setSearchByStartDate("");
    setSearchByFinalDate("");
  };

  const changeDateFormat = (originalDate) => {
    let piecesDate = originalDate.split("-");
    return piecesDate[2] + "/" + piecesDate[1] + "/" + piecesDate[0];
  };

  const funtionToDeleted = async () => {
    setActionButtonModal("Eliminar");
    const response = await deletePrescriptionFunction(dataPrescription.id);

    if (response.status === statusOk) {
      await allPrescriptionsFromApiFunction(setAllPrescriptionsData);
      handleCloseModalDelete();
      setTextAlert(
        `Se eliminó la prescripción del paciente ${dataPrescription.patient.name}`
      );
      handleShowFloatAlter();
    } else {
      handleCloseModalDelete();
      setTextAlert("Error al eliminar la prescripción");
      handleShowFloatAlter();
    }
  };

  const AddNewMedicalPrescription = () => {
    return (
      <>
        <div>
          <h1>Prescripciones Médicas</h1>
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
                setDataPrescription({});
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

  const MedicalPrescriptionTable = () => {
    return (
      <div id="tableConteiner" className="shadow bg-body rounded">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Médico</th>
              <th>Fecha de Asignación</th>
              <th id="disableCell">Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataTable
              .filter((field) => {
                const patientNameMatches = field.patient.name
                  .toLowerCase()
                  .includes(searchByNamePatient.toLowerCase());

                const doctorNameMatches = field.doctor.name
                  .toLowerCase()
                  .includes(searchByDoctor.toLowerCase());

                const startDateMatch =
                  !searchByStartDate ||
                  (searchByStartDate &&
                    new Date(field.registerDate) >=
                      new Date(searchByStartDate));

                const finalDateMatch =
                  !searchByFinalDate ||
                  (searchByFinalDate &&
                    new Date(field.registerDate) <=
                      new Date(searchByFinalDate));

                return (
                  patientNameMatches &&
                  doctorNameMatches &&
                  startDateMatch &&
                  finalDateMatch
                );
              })
              .map((infoMedicalPrescriotion) => (
                <tr key={infoMedicalPrescriotion.id}>
                  <td>{infoMedicalPrescriotion.patient.name}</td>
                  <td>{infoMedicalPrescriotion.doctor.name}</td>
                  <td>
                    {changeDateFormat(infoMedicalPrescriotion.registerDate)}
                  </td>
                  <td id="disableCell">
                    {infoMedicalPrescriotion.description}
                  </td>

                  <td className="td-actions text-center">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-clear">Editar</Tooltip>}
                    >
                      <button
                        type="button"
                        rel="tooltip"
                        className="btn btn btn-primary btn-round btn-just-icon btn-sm m-1"
                        onClick={() => {
                          handleShowModal();
                          setGetDataFromTable(infoMedicalPrescriotion);
                          setActionButtonModal("Editar");
                          setDataPrescription(infoMedicalPrescriotion);
                          setPrescriptionDoctorId(
                            infoMedicalPrescriotion.doctor.id
                          );
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
                          setDataPrescription(infoMedicalPrescriotion);
                          handleShowModalDelete();
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
                <AddNewMedicalPrescription />

                <div className="row cont-filtros">
                  <div className="col-md-3 mb-3">
                    <h4>Nombre</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        value={searchByNamePatient}
                        onChange={(e) => {
                          setSearchByNamePatient(e.target.value);
                          setSearchByDoctor("");
                          setSearchByStartDate("");
                          setSearchByFinalDate("");
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[A-Za-z\s]+$"
                      />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <h4>Médico</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        value={searchByDoctor}
                        onChange={(e) => {
                          setSearchByDoctor(e.target.value);
                          setSearchByNamePatient("");
                          setSearchByStartDate("");
                          setSearchByFinalDate("");
                        }}
                        placeholder="Buscar por médico..."
                        pattern="^[A-Za-z\s]+$"
                      />
                    </div>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h4>Fecha inicial</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        autoComplete="off"
                        type="date"
                        className="form-control"
                        value={searchByStartDate}
                        onChange={(e) => {
                          setSearchByStartDate(e.target.value);
                          setSearchByDoctor("");
                          setSearchByNamePatient("");
                        }}
                        placeholder="Buscar por fecha inicial..."
                      />
                    </div>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h4>Fecha final</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        autoComplete="off"
                        type="date"
                        className="form-control"
                        value={searchByFinalDate}
                        onChange={(e) => {
                          setSearchByFinalDate(e.target.value);
                          setSearchByDoctor("");
                          setSearchByNamePatient("");
                        }}
                        placeholder="Buscar por fecha final..."
                      />
                    </div>
                  </div>

                  <div className="mt-1 ml-4 col-md-1 d-flex ">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-clear">Limpiar</Tooltip>}
                    >
                      <button
                        id="iconoClear"
                        className="btn"
                        type="button"
                        onClick={handleClear}
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

            <MedicalPrescriptionTable />
          </>
        ) : (
          <div>
            <h3>Falla en la conexion con la base de datos</h3>
          </div>
        )}
      </div>

      <ModalMedicalPrescriptions
        show={showModal}
        handleClose={handleCloseModal}
      />

      <ModalDelete
        show={showModalDelete}
        handleClose={handleCloseModalDelete}
        funtionToDeleted={funtionToDeleted}
        messageToDelete={
          "¿Está seguro de que desea eliminar esta prescripción?"
        }
      />
    </>
  );
};
