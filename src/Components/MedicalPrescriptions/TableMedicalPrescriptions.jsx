import React, { useContext, useState } from "react";
import { ModalMedicalPrescriptions } from "./ModalMedicalPrescriptions";
import { GetTheAppContext } from "../../Context/AppContext";
import "../../Css/TableMedicalPrescriptions.css";
import { MdDeleteForever } from "react-icons/md";
import { BsPersonFillAdd, BsPencilFill } from "react-icons/bs";
import { LuFilterX } from "react-icons/lu";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ModalDelete } from "./ModalDelete";

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

  return (
    <div className="container mt-5">
      <div className=" card mt-4 row ">
        <div className="card-header d-flex">
          <div className="col-8">
            <h2 className="card-title">Prescripciones Médicas</h2>
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
                  setDataPrescription({});
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
              <div className="col-md-4 mb-3">
                <h4>Buscar</h4>
              </div>
              <div className="row">
                <div className="container mb-3">
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <label>Paciente</label>
                      <input
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
                    <div className="col-md-3 mb-3">
                      <label>Médico</label>
                      <input
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

                    <div className="col-md-2 mb-3">
                      <label>Fecha inicial</label>
                      <div>
                        <input
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
                      <label>Fecha final</label>
                      <div>
                        <input
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

                    <div className="col-md-2 d-flex flex-row-reverse">
                      <div className="w-auto p-4">
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
                            onClick={handleClear}
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
                  <th>Médico</th>
                  <th style={{ width: "10%" }}>Fecha de Asignación</th>
                  <th style={{ width: "35%" }}>Descripción</th>
                  <th style={{ width: "20%" }}>Acciones</th>
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
                      new Date(field.date) >= new Date(searchByStartDate);

                    const finalDateMatch =
                      !searchByFinalDate ||
                      new Date(field.date) <= new Date(searchByFinalDate);

                    return (
                      patientNameMatches &&
                      doctorNameMatches &&
                      startDateMatch &&
                      finalDateMatch
                    );
                  })
                  .map((field) => (
                    <tr key={field.id}>
                      <td>{field.patient.name}</td>
                      <td>{field.doctor.name}</td>
                      <td>{changeDateFormat(field.date)}</td>
                      <td>{field.description}</td>
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
                              setActionButtonModal("Editar");
                              setDataPrescription(field);
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
                              setDataPrescription(field);
                              handleShowModalDelete();
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
          <ModalMedicalPrescriptions
            show={showModal}
            handleClose={handleCloseModal}
          />

          <ModalDelete
            show={showModalDelete}
            handleClose={handleCloseModalDelete}
          />
        </div>
      </div>
    </div>
  );
};
