import React, {useState, useContext} from 'react';
import '../../Css/CssTable.css';
import { GetTheAppContext } from "../../Context/AppContext";
import { ModalMedicine } from './modal';
import { MyModalDelete } from './modalDelete';
import { BsPersonFillAdd, BsPencilFill  } from "react-icons/bs";
import { MdDeleteForever } from 'react-icons/md';
import { LuFilterX } from "react-icons/lu";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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
    setIdDate,
    setDataUserDate,
  } = useContext(GetTheAppContext);

  const displayedFields = ["nameDoctor", "namePatient", "date", "time", "notes"];

  const [searchNameDoctor, setSearchNameDoctor] = useState("");
  const [searchNamePatient, setSearchNamePatient] = useState("");
  const [searchDate, setSearchDate] = useState("");

  const handleClear = () => {
    setSearchNameDoctor("");
    setSearchNamePatient("");
    setSearchDate("");
  };

  const filteredData = data.filter((item) => {
    const nameDoctorMatches = item.nameDoctor
      .toLowerCase()
      .includes(searchNameDoctor.toLowerCase());

    const namePatientMatches = item.namePatient
          .toLowerCase()
          .includes(searchNamePatient.toLowerCase());  

   //const DateMatches = item.date.includes(searchDate);



    return namePatientMatches && nameDoctorMatches; // && DateMatches
 });
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
              setSearchDate("");
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
              setSearchDate("");
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
                  <th>Medico</th>
                  <th>Paciente</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Notas</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
              {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div id="idTextPatient" className="d-inline">
                        {item.patientDTO.name}
                      </div>
                    </td>
                    <td>
                      <div id="idTextDoctor" className="d-inline">
                        {item.doctorDTO.name}
                      </div>
                    </td>
                    <td>
                      <div id="idTextDate" className="d-inline">
                        {new Date(item.date).toLocaleDateString("es-ES")}
                      </div>
                    </td>
                    <td>
                      <div id="idTextHour" className="d-inline">
                        {item.hour}
                      </div>
                    </td>
                    <td>
                      <div id="idTextNotes" className="d-inline">
                        {item.notes}
                      </div>
                    </td>
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
                            setIdDate(item.id);
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
                            setIdDate(item.id);
                            setDataUserDate(item);
                            handleShowModalDelete();
                          }}
                        >
                          <MdDeleteForever
                            size={13}
                            onClick={() => {
                              setDataUserDate(item);
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
          <ModalMedicine show={showModal} handleClose={handleCloseModal} />
          <MyModalDelete show={showModalDelete} handleClose={handleCloseModalDelete}  />
        </div>
      </div>
    </div>
  
  );
}