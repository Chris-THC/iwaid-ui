import React, { useState, useContext } from "react";
import { ModalPatient } from "./ModalPatient";
import { GetTheAppContext } from "../../Context/AppContext";
import "../../Css/TablePatients.css";
import { MdDeleteForever, MdChangeCircle } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { GiLargePaintBrush } from "react-icons/gi";
import { Button } from "react-bootstrap";
import { MyModalDelete } from "./MyModalDelete";

export const TablePatient = ({ dataTable }) => {
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
                <div className="container mb-1">
                  <div className="row">
                    <div className="col-md-3 mb-1">
                      <label>Nombre</label>
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control inputTable"
                        value={searchName}
                        onChange={(e) => {
                          setSearchName(e.target.value);
                          setSearchNumPhone("");
                          setSearchEmail("");
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[A-Za-z\s]+$"
                      />
                    </div>
                    <div className="col-md-3 mb-1">
                      <label>Teléfono</label>
                      <input
                        type="number"
                        className="form-control inputTable"
                        value={searchNumPhone}
                        onChange={(e) => {
                          setSearchNumPhone(e.target.value);
                          setSearchName("");
                          setSearchEmail("");
                        }}
                        placeholder="Buscar por teléfono..."
                      />
                    </div>
                    <div className="col-md-4 mb-1">
                      <label>Correo</label>
                      <input
                        type="email"
                        className="form-control inputTable"
                        value={searchEmail}
                        onChange={(e) => {
                          setSearchEmail(e.target.value);
                          setSearchName("");
                          setSearchNumPhone("");
                        }}
                        placeholder="Buscar por correo..."
                      />
                    </div>

                    <div className="col-md-2 d-flex flex-row-reverse">
                      <div className=" w-auto p-4">
                        <button
                          id="btnClearTable"
                          className="btn btn-secondary"
                          type="button"
                          onClick={handleClear}
                        >
                          <GiLargePaintBrush /> Limpiar
                        </button>
                      </div>
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
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    {displayedFields.map((field) => {
                      if (field === "fechaNacimiento") {
                        return (
                          <td key={field}>
                            <div id="idTextPatient" className="d-inline">
                              {new Date(item[field]).toLocaleDateString(
                                "es-ES"
                              )}
                            </div>
                          </td>
                        );
                      } else {
                        return (
                          <td key={field}>
                            <div id="idTextPatient" className="d-inline">
                              {item[field]}
                            </div>
                          </td>
                        );
                      }
                    })}
                    <td>
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
                      <Button
                        id="btnTables"
                        className="ms-2 me-2 mb-1 d-inline"
                        variant="danger"
                        onClick={() => {
                          console.log(item.nombre);
                          // setTextAlert(`Se ha eliminado: ${item.nombre}`);
                          // handleShowFloatAlter();
                          handleShowModalDelete();
                        }}
                      >
                        <MdDeleteForever
                          id="btnDeletePatient"
                          className="btn-icon-lg"
                        />{" "}
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ModalPatient show={showModal} handleClose={handleCloseModal} />
          <MyModalDelete
            show={showModalDelete}
            handleClose={handleCloseModalDelete}
          />
        </div>
      </div>
    </div>
  );
};
