import React, { useState, useContext } from "react";
import { ModalPatient } from "./ModalPatient";
import { GetTheAppContext } from "../../Context/AppContext";
import "../../Css/TablePatients.css";
import { MdDeleteForever, MdChangeCircle } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { Button } from "react-bootstrap";

export const TablePatient = ({ dataTable }) => {
  const {
    handleShowModal,
    handleCloseModal,
    showModal,
    setGetDataFromTable,
    setActionButtonModal,
    handleShowFloatAlter,
    setTextAlert,
  } = useContext(GetTheAppContext);

  const displayedFields = [
    "nombre",
    "fechaNacimiento",
    "ciudad",
    "telefono",
    "rfc",
  ];
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
      <div className=" card mt-4 row">
        <div className="card-header d-flex">
          <div className="col-10">
            <h2 className="card-title">Pacientes</h2>
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

        <div className="card-header">
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
                    <option value="rfc">RFC</option>
                    <option value="telefono">Número de Teléfono</option>
                    <option value="correo">Correo</option>
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
                  <th>Fecha de Nacimiento</th>
                  <th>Ciudad</th>
                  <th>Teléfono</th>
                  <th>RFC</th>
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
          <ModalPatient show={showModal} handleClose={handleCloseModal} />
        </div>
      </div>
    </div>
  );
};
