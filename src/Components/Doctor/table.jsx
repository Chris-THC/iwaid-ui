import React, { useState, useContext } from "react";
import "../../Css/CssTable.css";
import { GetTheAppContext } from "../../Context/AppContext";
import { ModalGeneric } from "../../Layouts/Modal/modal";
import { ModalDelete } from "../../Layouts/Modal/ModalDelete";
import { MdDeleteForever } from "react-icons/md";
import { BsPersonFillAdd, BsPencilFill } from "react-icons/bs";
import { LuFilterX } from "react-icons/lu";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { statusOk } from "../../Layouts/HttpStatus/HTTPStatusCode";

export function TablaGeneric({ title, data }) {
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

  const displayedFields = [
    "name",
    "specialty",
    "phoneNumber",
    "address",
    "email",
  ];

  const allSpecializations = [...new Set(data.map((item) => item.specialty))];

  const [searchName, setSearchName] = useState("");

  const [searchEmail, setSearchEmail] = useState("");
  const [searchSpecialization, setSearchSpecialization] = useState("");

  const handleClear = () => {
    setSearchName("");
    setSearchEmail("");
    setSearchSpecialization("");
  };

  const filteredData = data.filter((item) => {
    const nameMatches = item.name
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const emailMatches = item.email
      .toLowerCase()
      .includes(searchEmail.toLowerCase());
    const specializationMatches = searchSpecialization
      ? item.specialty.toLowerCase() === searchSpecialization.toLowerCase()
      : true;

    return nameMatches && emailMatches && specializationMatches;
  });

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
                        onChange={(e) => {
                          setSearchName(e.target.value);
                          setSearchEmail("");
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[A-Za-z\s]+$"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label>Especialidad</label>
                      <select
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
                          <LuFilterX color="white" />
                        </button>
                      </OverlayTrigger>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <table className="table table-bordered custom-table text-center">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Especialidad</th>
                  <th>Teléfono</th>
                  <th>Dirección</th>
                  <th>Correo</th>
                  <th>Acciones</th>
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
                            setDoctorId(item.id);
                            setGetDataFromTable(item);
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
                          className="ms-2 me-2 mb-2 mt-2 d-inline "
                          variant="danger"
                          onClick={() => {
                            setDoctorId(item.id);
                            setDataUserDoctor(item);
                            handleShowModalDelete();
                          }}
                        >
                          <MdDeleteForever
                            size={13}
                            onClick={() => {
                              setDataUserDoctor(item);
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
          <ModalGeneric show={showModal} handleClose={handleCloseModal} title={"Médico"} type={"doctor"} />
          <ModalDelete
            show={showModalDelete}
            handleClose={handleCloseModalDelete}
            funtionToDeleted={funtionToDeleted}
            messageToDelete={"¿Está seguro que desea eliminar este médico?"}
          />
        </div>
      </div>
    </div>
  );
}
