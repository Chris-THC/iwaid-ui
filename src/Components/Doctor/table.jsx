import React, {useState, useContext} from 'react';
import '../../Css/CssTable.css';
import { GetTheAppContext } from "../../Context/AppContext";
import { ModalDoctor } from './modal';
import { MyModalDelete } from './modalDelete';
import { BsPersonFillAdd } from "react-icons/bs";
import { MdChangeCircle, MdDeleteForever } from 'react-icons/md';
import { Button } from "react-bootstrap";



export function TablaGeneric({ title, data }) {

  const [showModalDelete, setShowModalDelete] = useState(false);
  // const[id, setid] = useState(null);
  const handleShowModalDelete = () => {
    setShowModalDelete(true);
    // setid(Id);
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
    "name",
    "specialization",
    "phoneNumber",
    "address",
    "email",
  ];
  
  const [searchName, setSearchName] = useState("");
  const [searchphoneNumber, setSearchphoneNumber] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  const handleClear = () => {
    setSearchName("");
    setSearchphoneNumber("");
    setSearchEmail("");
  };

  const filteredData = data.filter((item) => {
    const nombreMatches = item.name
      .toLowerCase()
      .includes(searchName.toLowerCase());

    const phoneNumberMatches = item.phoneNumber.includes(searchphoneNumber);

    const emailMatches = item.specialization
      .toLowerCase()
      .includes(searchEmail.toLowerCase());

    return nombreMatches && phoneNumberMatches && emailMatches;
  });

  return (
    <div className="container mt-5">
    <div className=" card mt-4 row">
      <div className="card-header d-flex">
        <div className="col-8">
          <h2 className="card-title">{title}</h2>
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
                      onChange={(e) => {
                        setSearchName(e.target.value);
                        setSearchphoneNumber("");
                        setSearchEmail("");
                      }}
                      placeholder="Buscar por nombre..."
                      pattern="^[A-Za-z\s]+$"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>Teléfono</label>
                    <input
                      type="number"
                      className="form-control"
                      value={searchphoneNumber}
                      onChange={(e) => {
                        setSearchphoneNumber(e.target.value);
                        setSearchName("");
                        setSearchEmail("");
                      }}
                      placeholder="Buscar por Teléfono..."
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>Especialidad</label>
                    <input
                      type="text"
                      className="form-control"
                      value={searchEmail}
                      onChange={(e) => {
                        setSearchEmail(e.target.value);
                        setSearchName("");
                        setSearchphoneNumber("");
                      }}
                      placeholder="Buscar por Especialidad..."
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
                <th>Especialidad</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Correo</th>
                <th>Acción</th>
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
                    <td className='Buttons'>
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
                          
                          handleShowModalDelete()
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
          <ModalDoctor show={showModal} handleClose={handleCloseModal} />
          <MyModalDelete show={showModalDelete} handleClose={handleCloseModalDelete}  />
        </div>
      </div>
    </div>
  
  
  );
}

