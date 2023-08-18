import React, { useState, useContext } from "react";
import "../../Css/CssTable.css";
import { GetTheAppContext } from "../../Context/AppContext";
import { ModalGeneric } from "../../Layouts/Modal/modal";
import { ModalDelete } from "../../Layouts/Modal/ModalDelete";
import { BsPersonFillAdd, BsPencilFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { LuFilterX } from "react-icons/lu";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { statusOk } from "../../Layouts/HttpStatus/HTTPStatusCode";

export function TablaGeneric({ title, data }) {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [searchNameDoctor, setSearchNameDoctor] = useState("");
  const [searchNamePatient, setSearchNamePatient] = useState("");

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

  const handleClear = () => {
    setSearchNameDoctor("");
    setSearchNamePatient("");
  };

  const handleShowModalDelete = () => {
    setShowModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
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

  const formatDate = (originalDate) => {
    let piecesDate = originalDate.split("-");
    return piecesDate[2] + "/" + piecesDate[1] + "/" + piecesDate[0];
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

  return (
    <div className="container mt-5">
      <div className=" card mt-4 row">
        <div className="card-header d-flex">
          <div className="col-8">
            <h2 className="card-title">{title}</h2>
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
          <div className="card-body table-responsive">
            <div className="container">
              <div className="row mb-3">
                <div className="col-md-4">
                  <h4>Buscar</h4>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-4">
                  <label>Nombre del doctor</label>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    value={searchNameDoctor}
                    onChange={(e) => {
                      setSearchNameDoctor(e.target.value);
                    }}
                    placeholder="Buscar por nombre..."
                    pattern="^[A-Za-z\s]+$"
                  />
                </div>
                <div className="col-md-4">
                  <label>Nombre del paciente</label>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    value={searchNamePatient}
                    onChange={(e) => {
                      setSearchNamePatient(e.target.value);
                    }}
                    placeholder="Buscar por nombre..."
                    pattern="^[A-Za-z\s]+$"
                  />
                </div>

                <div className="col-md-4 d-flex align-items-center mt-4">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-clear">Limpiar</Tooltip>}
                  >
                    <button
                      id="iconoClear"
                      className="btn btn-primary"
                      type="button"
                      onClick={handleClear}
                    >
                      <LuFilterX color="white" />
                    </button>
                  </OverlayTrigger>
                </div>
              </div>
            </div>

            <table className="table table-bordered custom-table text-center">
              <thead>
                <tr>
                  <th>Paciente</th>
                  <th>Médico</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Notas</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((field) => {
                    const patienNameMatches = field.patientDTO.name
                      .toLowerCase()
                      .includes(searchNamePatient.toLowerCase());

                    const doctorNameMatches = field.doctorDTO.name
                      .toLowerCase()
                      .includes(searchNameDoctor.toLowerCase());

                    return patienNameMatches && doctorNameMatches;
                  })
                  .map((field) => (
                    <tr key={field.id}>
                      <td>{field.patientDTO.name}</td>
                      <td>{field.doctorDTO.name}</td>
                      <td>{formatDate(field.date)}</td>
                      <td>{hourMappings[field.hour]}</td>
                      <td>{field.notes}</td>
                      <td className="Buttons">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-clear">Editar</Tooltip>}
                        >
                          <Button
                            size={13}
                            id="btnTables"
                            className="ms-2 me-2 mb-2 mt-2"
                            variant="primary"
                            onClick={() => {
                              handleShowModal();
                              setIdDate(field.id);
                              setGetDataFromTable(field);
                              setActionButtonModal("Editar");
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
                            className="ms-2 me-2 mb-2 mt-2 d-inline "
                            variant="danger"
                            onClick={() => {
                              setIdDate(field.id);
                              setDataUserDate(field);
                              handleShowModalDelete();
                            }}
                          >
                            <MdDeleteForever
                              size={13}
                              onClick={() => {
                                setDataUserDate(field);
                              }}
                              id="btnDelete"
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

          <ModalGeneric show={showModal} handleClose={handleCloseModal} title={"Cita Medica"} type={"appointment"}/>
          <ModalDelete
            show={showModalDelete}
            handleClose={handleCloseModalDelete}
            funtionToDeleted={funtionToDeleted}
            messageToDelete={"¿Está seguro de que desea eliminar esta cita?"}
          />
        </div>
      </div>
    </div>
  );
}
