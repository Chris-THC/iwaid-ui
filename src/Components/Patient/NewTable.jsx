import { useContext, useState } from "react";
import "../../Css/DoctorCss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetTheAppContext } from "../../Context/AppContext";
import { ModalPatient } from "./ModalPatient";
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

export const NewTable = ({ dataTable }) => {
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
    setTextAlert,
    setDataUserPatient,
    setPatientId,
    deletePatientFunction,
    getAllPatientDataFunction,
    setGetAllPatientsData,
    patientId,
    dataUserPatient,
    handleShowFloatAlter,
  } = useContext(GetTheAppContext);

  const changeDateFormat = (originalDate) => {
    let piecesDate = originalDate.split("-");
    return piecesDate[2] + "/" + piecesDate[1] + "/" + piecesDate[0];
  };

  const [searchByName, setSearchByName] = useState("");
  const [searchByGender, setSearchByGender] = useState("");
  const [searchByCity, setSearchByCity] = useState("");
  const [searchByDateOfBirth, setSearchByDateOfBirth] = useState("");
  const [searchByRfc, setSearchByRfc] = useState("");

  const handleClear = () => {
    setSearchByName("");
    setSearchByGender("");
    setSearchByCity("");
    setSearchByDateOfBirth("");
    setSearchByRfc("");
  };

  const funtionToDeleted = async () => {
    setActionButtonModal("Eliminar");
    const response = await deletePatientFunction(patientId);

    if (response.status === statusOk) {
      await getAllPatientDataFunction(setGetAllPatientsData);
      handleCloseModalDelete();
      setTextAlert(`Se eliminó al paciente ${dataUserPatient.name}`);
      handleShowFloatAlter();
    } else {
      handleCloseModalDelete();
      setTextAlert("Error al eliminar el paciente");
      handleShowFloatAlter();
    }
  };

  const AddNewDoctor = () => {
    return (
      <>
        <div>
          <h1>Pacientes</h1>
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
                handleShowModal();
                setGetDataFromTable([]);
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

  const DoctorTable = () => {
    return (
      <div id="tableConteiner" className="shadow bg-body rounded mb-4">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Nombre</th>
              <th id="disableCell">Género</th>
              <th>Ciudad</th>
              <th>Año nacimiento</th>
              <th id="disableCell">RFC</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataTable
              .filter((item) => {
                const nameMatches = item.name
                  .toLowerCase()
                  .includes(searchByName.toLowerCase());

                const genderMatches = item.gender
                  .toLowerCase()
                  .includes(searchByGender.toLowerCase());

                const cityMatches = item.city
                  .toLowerCase()
                  .includes(searchByCity.toLowerCase());

                const dateMatches = item.dateOfBirth
                  .toLowerCase()
                  .includes(searchByDateOfBirth.toLowerCase());

                const rfcMatches = item.rfc
                  .toLowerCase()
                  .includes(searchByRfc.toLowerCase());

                return (
                  nameMatches &&
                  genderMatches &&
                  cityMatches &&
                  dateMatches &&
                  rfcMatches
                );
              })
              .map((infoPatient) => (
                <tr>
                  <td>{infoPatient.name}</td>
                  <td id="disableCell">{infoPatient.gender}</td>
                  <td>{infoPatient.city}</td>
                  <td className="text-wrap">
                    {changeDateFormat(infoPatient.dateOfBirth)}
                  </td>
                  <td id="disableCell">{infoPatient.rfc}</td>

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
                          setGetDataFromTable(infoPatient);
                          setPatientId(infoPatient.id);
                          setActionButtonModal("Editar");
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
                          setPatientId(infoPatient.id);
                          setDataUserPatient(infoPatient);
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
                <AddNewDoctor />

                <div className="row cont-filtros">
                  <div className="col-md-2 mb-3">
                    <h4>Nombre</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        autoComplete="off"
                        type="text"
                        className="form-control inputTable"
                        value={searchByName}
                        onChange={(e) => {
                          setSearchByName(e.target.value);
                          setSearchByGender("");
                          setSearchByCity("");
                          setSearchByDateOfBirth("");
                          setSearchByRfc("");
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[a-zA-Z\sÀ-ÖØ-öø-ÿ]+$"
                      />
                    </div>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h4>Género</h4>
                    <div id="DivinputSearch">
                      <select
                        id="inputSearch"
                        className="form-control inputTable"
                        value={searchByGender}
                        onChange={(e) => {
                          setSearchByGender(e.target.value);
                          setSearchByName("");
                          setSearchByCity("");
                          setSearchByDateOfBirth("");
                          setSearchByRfc("");
                        }}
                      >
                        <option value="">Seleccionar género...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h4>Ciudad</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        type="text"
                        className="form-control inputTable"
                        value={searchByCity}
                        onChange={(e) => {
                          setSearchByCity(e.target.value);
                          setSearchByName("");
                          setSearchByGender("");
                          setSearchByDateOfBirth("");
                          setSearchByRfc("");
                        }}
                        placeholder="Buscar por ciudad..."
                      />
                    </div>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h4>RFC</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        type="text"
                        className="form-control inputTable"
                        value={searchByRfc}
                        onChange={(e) => {
                          setSearchByRfc(e.target.value);
                          setSearchByDateOfBirth("");
                          setSearchByName("");
                          setSearchByGender("");
                          setSearchByCity("");
                        }}
                        placeholder="Buscar por RFC..."
                      />
                    </div>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h4>Año</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        type="number"
                        className="form-control inputTable"
                        value={searchByDateOfBirth}
                        onChange={(e) => {
                          setSearchByDateOfBirth(e.target.value);
                          setSearchByName("");
                          setSearchByGender("");
                          setSearchByCity("");
                          setSearchByRfc("");
                        }}
                        placeholder="Buscar año de nacimiento..."
                      />
                    </div>
                  </div>

                  <div className="mt-2 ml-4 col-md-2 d-flex justify-content align-items-center">
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

            <DoctorTable />
          </>
        ) : (
          <div>
            <h3>Falla en la conexion con la base de datos</h3>
          </div>
        )}
      </div>

      <ModalPatient show={showModal} handleClose={handleCloseModal} />
      <ModalDelete
        show={showModalDelete}
        handleClose={handleCloseModalDelete}
        funtionToDeleted={funtionToDeleted}
        messageToDelete={"¿Está seguro de que desea eliminar este paciente?"}
      />
    </>
  );
};
