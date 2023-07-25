import React, { useContext, useState } from "react";
import { ModalMedicalPrescriptions } from "./ModalMedicalPrescriptions";
import { GetTheAppContext } from "../../Context/AppContext";
import "../../Css/TablaMedicalPrescriptions.css";
import { MdDeleteForever, MdChangeCircle } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { Button } from "react-bootstrap";

export const TableMedicalPrescriptions = ({ dataTable }) => {
  const {
    handleShowModal,
    handleCloseModal,
    showModal,
    setGetDataFromTable,
    setActionButtonModal,
    handleShowFloatAlter,
    setTextAlert,
  } = useContext(GetTheAppContext);

  const displayedFields = ["nombre", "medico", "fecha", "medicamentos"];

  const [searchByName, setSearchByName] = useState("");
  const [searchByDoctor, setSearchByDoctor] = useState("");
  const [searchByDate, setSearchByDate] = useState("");

  const handleClear = () => {
    setSearchByName("");
    setSearchByDoctor("");
    setSearchByDate("");
  };

  const filteredData = dataTable.filter((item) => {
    const nombreMatches = item.nombre
      .toLowerCase()
      .includes(searchByName.toLowerCase());

    const doctorMatches = item.medico
      .toLowerCase()
      .includes(searchByDoctor.toLowerCase());

    const dateMatches = item.fecha
      .toLowerCase()
      .includes(searchByDate.toLowerCase());

    return nombreMatches && doctorMatches && dateMatches;
  });

  return (
    <div className="container mt-5">
      <div className=" card mt-4 row ">
        <div className="card-header d-flex">
          <div className="col-10">
            <h2 className="card-title">Prescripciones Médicas</h2>
          </div>

          <div className="col-2">
            <Button
              id="btnTables"
              className="ms-2 me-2 mb-1"
              variant="primary"
              onClick={() => {
                handleShowModal();
                setActionButtonModal("Agregar");
              }}
            >
              <BsPersonFillAdd /> Agregar
            </Button>
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
                    <div className="col-md-4 mb-3">
                      <label>Nombre</label>
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        value={searchByName}
                        onChange={(e) => {
                          setSearchByName(e.target.value);
                          setSearchByDoctor("");
                          setSearchByDate("");
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[A-Za-z\s]+$"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label>Medico</label>
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        value={searchByDoctor}
                        onChange={(e) => {
                          setSearchByDoctor(e.target.value);
                          setSearchByName("");
                          setSearchByDate("");
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[A-Za-z\s]+$"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label>Fecha</label>
                      <input
                        type="date"
                        className="form-control"
                        value={searchByDate}
                        onChange={(e) => {
                          setSearchByDate(e.target.value);
                          setSearchByName("");
                          setSearchByDoctor("")
                        }}
                        placeholder="Buscar por fecha de nacimiento..."
                      />
                    </div>

                    <div className="col-md-12 d-flex flex-row-reverse ">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={handleClear}
                      >
                        Limpiar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <table className="table table-bordered custom-table text-center">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Medico</th>
                  <th>Fecha de Asignación</th>
                  <th>Medicamentos Prescritos</th>
                  <th>Opción</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    {displayedFields.map((field) => (
                      <td key={field}>
                        <div id="idTextPatient" className="d-inline">
                          {item[field]}
                        </div>
                      </td>
                    ))}
                    <td>
                      <Button
                        id="btnTables"
                        className="ms-2 me-2 mb-1 d-inline"
                        variant="danger"
                        onClick={() => {
                          console.log(item.nombre);
                          setTextAlert(`Se ha eliminado: ${item.nombre}`);
                          handleShowFloatAlter();
                        }}
                      >
                        <MdDeleteForever
                          id="btnDeletePatient"
                          className="btn-icon-lg"
                        />{" "}
                        Eliminar
                      </Button>

                      <Button
                        id="btnTables"
                        className="ms-2 me-2 mb-1"
                        variant="primary"
                        onClick={() => {
                          handleShowModal();
                          setGetDataFromTable(item);
                          setActionButtonModal("Editar");
                        }}
                      >
                        <MdChangeCircle className="btn-icon-lg" /> Editar
                      </Button>
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
        </div>
      </div>
    </div>
  );
};
