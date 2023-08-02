import React, { useState, useContext } from "react";
import { ModalPatient } from "./ModalPatient";
import { GetTheAppContext } from "../../Context/AppContext";
import "../../Css/TablePatients.css";
import { MdDeleteForever } from "react-icons/md";
import { BsPersonFillAdd, BsPencilFill } from "react-icons/bs";
import { LuFilterX } from "react-icons/lu";
import { Button } from "react-bootstrap";
import { MyModalDelete } from "./MyModalDelete";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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
    setDataUserPatient,
    setPatientId,
  } = useContext(GetTheAppContext);

  const displayedFields = ["name", "gender", "city", "dateOfBirth", "rfc"];

  const [searchByName, setSearchByName] = useState("");
  const [searchByGender, setSearchByGender] = useState("");
  const [searchByCity, setSearchByCity] = useState("");
  const [searchByDateOfBirth, setSearchByDateOfBirth] = useState("");
  const [searchByRfc, setSearchByRfc] = useState("");

  const handleClear = () => {
    setSearchByName("");
    setSearchByGender("");
    setSearchByCity("");
    setSearchByDateOfBirth("");
    setSearchByRfc("");
  };

  const filteredData = dataTable.filter((item) => {
    const nameMatches = item.name
      .toLowerCase()
      .includes(searchByName.toLowerCase());

    const genderMatches = item.gender
      .toLowerCase()
      .includes(searchByGender.toLowerCase());

    const cityMatches = item.city
      .toLowerCase()
      .includes(searchByCity.toLowerCase());

    const dateMatches = item.dateOfBirth
      .toLowerCase()
      .includes(searchByDateOfBirth.toLowerCase());

    const rfcMatches = item.rfc
      .toLowerCase()
      .includes(searchByRfc.toLowerCase());

    return (
      nameMatches && genderMatches && cityMatches && dateMatches && rfcMatches
    );
  });

  return (
    <div className="container mt-5">
      <div className=" card mt-4 row">
        <div className="card-header d-flex">
          <div className="col-8">
            <h2 className="card-title">Pacientes</h2>
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
          <div className=" card-body table-responsive">
            <div className="container mb-3">
              <div className="col-md-4 mb-3">
                <h4>Buscar</h4>
              </div>
              <div id="input-table" className="row">
                <div className="container mb-1">
                  <div className="row">
                    <div className="col-md-2 mb-1">
                      <label>Nombre</label>
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control inputTable"
                        value={searchByName}
                        onChange={(e) => {
                          setSearchByName(e.target.value);
                          setSearchByGender("");
                          setSearchByCity("");
                          setSearchByDateOfBirth("");
                          setSearchByRfc("");
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[a-zA-Z\sÀ-ÖØ-öø-ÿ]+$"
                      />
                    </div>
                    <div className="col-md-2 mb-1">
                      <label>Género</label>
                      <select
                        className="form-control inputTable"
                        value={searchByGender}
                        onChange={(e) => {
                          setSearchByGender(e.target.value);
                          setSearchByName("");
                          setSearchByCity("");
                          setSearchByDateOfBirth("");
                          setSearchByRfc("");
                        }}
                      >
                        <option value="">Seleccionar género...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                    <div className="col-md-2 mb-1">
                      <label>Ciudad</label>
                      <input
                        type="text"
                        className="form-control inputTable"
                        value={searchByCity}
                        onChange={(e) => {
                          setSearchByCity(e.target.value);
                          setSearchByName("");
                          setSearchByGender("");
                          setSearchByDateOfBirth("");
                          setSearchByRfc("");
                        }}
                        placeholder="Buscar por ciudad..."
                      />
                    </div>

                    <div className="col-md-2 mb-1">
                      <label>RFC</label>
                      <input
                        type="text"
                        className="form-control inputTable"
                        value={searchByRfc}
                        onChange={(e) => {
                          setSearchByRfc(e.target.value);
                          setSearchByDateOfBirth("");
                          setSearchByName("");
                          setSearchByGender("");
                          setSearchByCity("");
                        }}
                        placeholder="Buscar por RFC..."
                      />
                    </div>

                    {/* Fix the date reset input so that you can only receive 2 years and return all patients who are within range.   */}
                    <div className="col-md-2 mb-1">
                      <label>Rango año de nacimiento</label>
                      <input
                        type="number"
                        className="form-control inputTable"
                        value={searchByDateOfBirth}
                        onChange={(e) => {
                          setSearchByDateOfBirth(e.target.value);
                          setSearchByName("");
                          setSearchByGender("");
                          setSearchByCity("");
                          setSearchByRfc("");
                        }}
                        placeholder="Buscar por fecha de nacimiento..."
                      />
                    </div>

                    <div className="col-md-2 d-flex flex-row-reverse">
                      <div className=" w-auto p-4">
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
                  <th>Nombre</th>
                  <th>Género</th>
                  <th>Ciudad</th>
                  <th>Fecha de nacimiento</th>
                  <th>RFC</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    {displayedFields.map((field) => {
                      if (field === "dateOfBirth") {
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
                            setGetDataFromTable(item);
                            setPatientId(item.id);
                            setActionButtonModal("Editar");
                          }}
                        >
                          <BsPencilFill className="btn-icon-lg" />
                        </Button>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-clear">Eliminar</Tooltip>}
                      >
                        <Button
                          size={16}
                          id="btnTables"
                          className="ms-2 me-2 mb-2 mt-2"
                          variant="danger"
                          onClick={() => {
                            setPatientId(item.id);
                            setDataUserPatient(item);
                            handleShowModalDelete();
                          }}
                        >
                          <MdDeleteForever
                            size={13}
                            onClick={() => {
                              setDataUserPatient(item);
                            }}
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
