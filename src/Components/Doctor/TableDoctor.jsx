import { useContext, useState } from "react";
import "../../Css/TableGenericCss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetTheAppContext } from "../../Context/AppContext";
import { ModalDoctor } from "./modal";
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

export const TableDoctor = ({ dataTable }) => {
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
    setDoctorId,
    setDataUserDoctor,

    doctorId,
    deleteDoctorFunction,
    getAllDoctorsDataFunction,
    setGetDataAllDoctors,
    setTextAlert,
    handleShowFloatAlter,
    dataUserDoctor,
  } = useContext(GetTheAppContext);

  const allSpecializations = [
    ...new Set(dataTable.map((item) => item.specialty)),
  ];

  const [searchName, setSearchName] = useState("");

  const [searchEmail, setSearchEmail] = useState("");
  const [searchSpecialization, setSearchSpecialization] = useState("");

  const handleClear = () => {
    setSearchName("");
    setSearchEmail("");
    setSearchSpecialization("");
  };

  const funtionToDeleted = async () => {
    setActionButtonModal("Eliminar");
    const response = await deleteDoctorFunction(doctorId);
    if (response.status === statusOk) {
      await getAllDoctorsDataFunction(setGetDataAllDoctors);
      handleCloseModalDelete();
      setTextAlert(`Se eliminó al médico ${dataUserDoctor.name}`);
      handleShowFloatAlter();
    } else {
      handleCloseModalDelete();
      setTextAlert("Error al eliminar el médico");
      handleShowFloatAlter();
    }
  };

  const AddNewDoctor = () => {
    return (
      <>
        <div>
          <h1>Médicos</h1>
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
      <div id="tableConteiner" className="shadow bg-body rounded">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th id="responsiveTextTable">Nombre</th>
              <th id="responsiveTextTable">Especialidad</th>
              <th id="responsiveTextTable">Teléfono</th>
              <th id="disableCell">Dirección</th>
              <th id="disableCell">Correo</th>
              <th id="btnActionTable">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataTable
              .filter((item) => {
                const nameMatches = item.name
                  .toLowerCase()
                  .includes(searchName.toLowerCase());
                const emailMatches = item.email
                  .toLowerCase()
                  .includes(searchEmail.toLowerCase());
                const specializationMatches = searchSpecialization
                  ? item.specialty.toLowerCase() ===
                    searchSpecialization.toLowerCase()
                  : true;

                return nameMatches && emailMatches && specializationMatches;
              })
              .map((infoDoctor) => (
                <tr key={infoDoctor.id}>
                  <td id="responsiveTextTable">{infoDoctor.name}</td>
                  <td id="responsiveTextTable">{infoDoctor.specialty}</td>
                  <td id="responsiveTextTable">{infoDoctor.phoneNumber}</td>
                  <td className="text-wrap" id="disableCell">
                    {infoDoctor.address}
                  </td>
                  <td id="disableCell">{infoDoctor.email}</td>

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
                          handleShowModal();
                          setDoctorId(infoDoctor.id);
                          setGetDataFromTable(infoDoctor);
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
                          setDoctorId(infoDoctor.id);
                          setDataUserDoctor(infoDoctor);
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
                  <div className="col-md-4 mb-3">
                    <h4>Nombre</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        value={searchName}
                        onChange={(e) => {
                          setSearchName(e.target.value);
                          setSearchEmail("");
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[A-Za-z\s]+$"
                      />
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <h4>Especialidad</h4>
                    <div id="DivinputSearch">
                      <select
                        id="inputSearch"
                        className="form-select"
                        value={searchSpecialization}
                        onChange={(e) =>
                          setSearchSpecialization(e.target.value)
                        }
                      >
                        <option value="">Todas las especialidades</option>
                        {allSpecializations.map((specialty, index) => (
                          <option key={index} value={specialty}>
                            {specialty}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-2 ml-4 col-md-4 d-flex justify-content align-items-center">
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

      <ModalDoctor show={showModal} handleClose={handleCloseModal} />
      <ModalDelete
        show={showModalDelete}
        handleClose={handleCloseModalDelete}
        funtionToDeleted={funtionToDeleted}
        messageToDelete={"¿Está seguro que desea eliminar este médico?"}
      />
    </>
  );
};
