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
import { ModalDelete } from "./ModalDelete";

export const Table = ({ dataTable }) => {
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

  const [searchByName, setSearchByName] = useState("");
  const [searchByDoctor, setSearchByDoctor] = useState("");
  const [searchByStartDate, setSearchByStartDate] = useState("");
  const [searchByFinalDate, setSearchByFinalDate] = useState("");

  const handleClear = () => {
    setSearchByName("");
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
                        value={searchByName}
                        onChange={(e) => {
                          setSearchByName(e.target.value);
                          setSearchByDoctor("");
                          setSearchByStartDate("");
                          setSearchByFinalDate("");
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[A-Za-z\s]+$"
                      />
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
                  <th style={{ width: "20%" }}>Antecedentes patologicos</th>
                  <th style={{ width: "20%" }}>Antecedentes no patologicos</th>
                  <th style={{ width: "20%" }}>
                    Antecedentes heredofamiliares
                  </th>
                  <th style={{ width: "20%" }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {dataTable
                  .filter((field) => {
                    const patientNameMatches = field.patient.name
                      .toLowerCase()
                      .includes(searchByName.toLowerCase());

                    return patientNameMatches;
                  })
                  .map((field) => (
                    <tr key={field.id}>
                      <td className="pt-2">{field.patient.name}</td>
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
          <ModalMedicalHistory
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
