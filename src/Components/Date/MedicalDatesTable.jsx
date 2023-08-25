import { useContext, useState } from "react";
import "../../Css/DoctorCss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalDates } from "./modal";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { statusOk } from "../HttpStatus/HTTPStatusCode";
import { GetTheAppContext } from "../../Context/AppContext";
import { ModalDelete } from "../../ModalDelete/ModalDelete";
import {
  faFilter,
  faPen,
  faTrashCan,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export const MedicalDatesTable = ({ dataTable }) => {
  
  const {
    handleShowModal,
    handleCloseModal,
    showModal,
    setGetDataFromTable,
    setActionButtonModal,
    setIdDate,
    setDataUserDate,
    idDate,
    deleteDateFunction,
    getAllDateDataFunction,
    setAllDataDate,
    setTextAlert,
    handleShowFloatAlter,
  } = useContext(GetTheAppContext);

  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleShowModalDelete = () => {
    setShowModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
  };

  const formatDate = (originalDate) => {
    let piecesDate = originalDate.split("-");
    return piecesDate[2] + "/" + piecesDate[1] + "/" + piecesDate[0];
  };
  const [searchNameDoctor, setSearchNameDoctor] = useState("");
  const [searchNamePatient, setSearchNamePatient] = useState("");

  const handleClear = () => {
    setSearchNameDoctor("");
    setSearchNamePatient("");
  };

  const funtionToDeleted = async () => {
    setActionButtonModal("Eliminar");
    const responseModalDelete = await deleteDateFunction(idDate);
    if (responseModalDelete.status === statusOk) {
      await getAllDateDataFunction(setAllDataDate);
      setTextAlert(`Se eliminó la cita`);
      handleCloseModalDelete();
      handleShowFloatAlter();
    } else {
      handleCloseModalDelete();
      setTextAlert(`Error al eliminar la cita`);
      handleShowFloatAlter();
    }
  };

  const hourMappings = {
    EIGHT_AM: "8:00-8:59 AM",
    NINE_AM: "9:00-9:59 AM",
    TEN_AM: "10:00-10:59 AM",
    ELEVEN_AM: "11:00-11:59 AM",
    TWELVE_PM: "12:00-12:59 PM",
    ONE_PM: "1:00-1:59 PM",
    TWO_PM: "2:00-2:59 PM",
    THREE_PM: "3:00-3:59 PM",
    FOUR_PM: "4:00-4:59 PM",
    FIVE_PM: "5:00-5:59 PM",
    SIX_PM: "6:00-6:59 PM",
    SEVEN_PM: "7:00-7:59 PM",
    EIGHT_PM: "8:00-8:59 PM",
  };

  const AddNewMedicalDate = () => {
    return (
      <>
        <div>
          <h1>Citas médicas</h1>
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

  const MedicalDateTable = () => {
    return (
      <div id="tableConteiner" className="shadow bg-body rounded mb-4">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Paciente</th>
              <th id="disableCell">Médico</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th id="disableCell">Notas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataTable
              .filter((field) => {
                const patienNameMatches = field.patientDTO.name
                  .toLowerCase()
                  .includes(searchNamePatient.toLowerCase());

                const doctorNameMatches = field.doctorDTO.name
                  .toLowerCase()
                  .includes(searchNameDoctor.toLowerCase());

                return patienNameMatches && doctorNameMatches;
              })
              .map((infoMedicalDates) => (
                <tr key={infoMedicalDates.id}>
                  <td>{infoMedicalDates.patientDTO.name}</td>
                  <td id="disableCell">{infoMedicalDates.doctorDTO.name}</td>
                  <td>{formatDate(infoMedicalDates.date)}</td>
                  <td>{hourMappings[infoMedicalDates.hour]}</td>
                  <td id="disableCell">{infoMedicalDates.notes}</td>

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
                          setIdDate(infoMedicalDates.id);
                          setGetDataFromTable(infoMedicalDates);
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
                          setIdDate(infoMedicalDates.id);
                          setDataUserDate(infoMedicalDates);
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
                <AddNewMedicalDate />

                <div className="row cont-filtros">
                  <div className="col-md-3 mb-3">
                    <h4>Nombre del paciente</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        autoComplete="off"
                        type="text"
                        className="form-control inputTable"
                        value={searchNameDoctor}
                        onChange={(e) => {
                          setSearchNameDoctor(e.target.value);
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[a-zA-Z\sÀ-ÖØ-öø-ÿ]+$"
                      />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <h4>Nombre del paciente</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        autoComplete="off"
                        type="text"
                        className="form-control inputTable"
                        value={searchNamePatient}
                        onChange={(e) => {
                          setSearchNamePatient(e.target.value);
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[a-zA-Z\sÀ-ÖØ-öø-ÿ]+$"
                      />
                    </div>
                  </div>

                  <div className="mt-3 ml-4 col-md-2 d-flex justify-content align-items-center">
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

            <MedicalDateTable />
          </>
        ) : (
          <div>
            <h3>Falla en la conexion con la base de datos</h3>
          </div>
        )}
      </div>

      <ModalDates show={showModal} handleClose={handleCloseModal} />
      <ModalDelete
        show={showModalDelete}
        handleClose={handleCloseModalDelete}
        funtionToDeleted={funtionToDeleted}
        messageToDelete={"¿Está seguro que desea eliminar este médico?"}
      />
    </>
  );
};
