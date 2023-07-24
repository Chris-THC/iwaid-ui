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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchOption, setSearchOption] = useState("nombre");

  const handleSearchOptionChange = (e) => {
    setSearchOption(e.target.value);
    setSearchTerm("");
  };

  const filteredData = dataTable.filter((item) =>
    item[searchOption].toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <div className="mb-3 table-bordered custom-table ">
              <label>
                <h4>Buscar</h4>
              </label>

              <div className="row">
                <div className="col-md-2">
                  <select
                    id="selectSearchPatient"
                    value={searchOption}
                    onChange={handleSearchOptionChange}
                    className="form-select mb-2"
                  >
                    <option value="nombre">Nombre</option>
                    <option value="medico">Medico</option>
                    <option value="fecha">Fecha</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <input
                    id="inputSearchPatient"
                    type="text"
                    autoComplete="off"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={`Buscar por ${searchOption}...`}
                    className="form-control rounded border"
                  />
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
