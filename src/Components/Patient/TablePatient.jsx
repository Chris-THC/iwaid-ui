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
    "correo",
  ];
  const [searchName, setSearchName] = useState("");
  const [searchNumPhone, setSearchNumPhone] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  const handleClear = () => {
    setSearchName("");
    setSearchNumPhone("");
    setSearchEmail("");
  };

  const filteredData = dataTable.filter((item) => {
    const nombreMatches = item.nombre
      .toLowerCase()
      .includes(searchName.toLowerCase());

    const telefonoMatches = item.telefono.includes(searchNumPhone);

    const correoMatches = item.correo
      .toLowerCase()
      .includes(searchEmail.toLowerCase());

    return nombreMatches && telefonoMatches && correoMatches;
  });

  return (
    <div className="container mt-5">
      <div className=" card mt-4 row">
        <div className="card-header d-flex">
          <div className="col-8">
            <h2 className="card-title">Pacientes</h2>
          </div>

          <div className="col-4 d-flex flex-row-reverse ">
            <Button
              id="btnAdd"
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
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        placeholder="Buscar por nombre..."
                        pattern="^[A-Za-z\s]+$"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label>Teléfono</label>
                      <input
                        type="number"
                        className="form-control"
                        value={searchNumPhone}
                        onChange={(e) => setSearchNumPhone(e.target.value)}
                        placeholder="Buscar por teléfono..."
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label>Correo</label>
                      <input
                        type="email"
                        className="form-control"
                        value={searchEmail}
                        onChange={(e) => setSearchEmail(e.target.value)}
                        placeholder="Buscar por correo..."
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
                  <th>Fecha de Nacimiento</th>
                  <th>Ciudad</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
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
