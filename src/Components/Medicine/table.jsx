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

export function TablaGeneric({ title, data  }) {

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
    setIdMedicine,
    setDataUserMedicine,
  } = useContext(GetTheAppContext);

  const displayedFields = [
    "key",
    "name",
    "dose",
    "packaging",
    "description",
    "quantity"
  ];
  
const allPackaging = data ? [...new Set(data.map((item) => item.packaging))] : [];
  const [searchName, setSearchName] = useState("");
  const [searchDosis, setSearchDosis] = useState("");
  const [searchPackaging, setSearchPackaging] = useState("");

  const handleClear = () => {
    setSearchName("");
    setSearchDosis("");
    setSearchPackaging("");
  };

  const filteredData = data.filter((item) => {
    const nombreMatches = item.name
      .toLowerCase()
      .includes(searchName.toLowerCase());

    const dosisMatches = item.dose.includes(searchDosis);

    const packagingMatches = searchPackaging
      ? item.packaging.toLowerCase() === searchPackaging.toLowerCase()
      : true;

    return nombreMatches && dosisMatches && packagingMatches;
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
          <div className=" card-body table-responsive">
            <div className="container mb-3">
              <div className="col-md-4 mb-3">
                <h4>Buscar</h4>
              </div>
              <div className="row">
              <div className="container mb-4">
  <div className="row">
    <div className="col mb-4">
      <label>Nombre</label>
      <input
        autoComplete="off"
        type="text"
        className="form-control"
        value={searchName}
        onChange={(e) => {
          setSearchName(e.target.value);
          setSearchDosis("");
          setSearchPackaging("");
        }}
        placeholder="Buscar por nombre..."
        pattern="^[A-Za-z\s]+$"
      />
    </div>
    <div className="col mb-4">
      <label>Dosis</label>
      <input
        type="number"
        className="form-control"
        value={searchDosis}
        onChange={(e) => {
          setSearchDosis(e.target.value);
          setSearchName("");
          setSearchPackaging("");
        }}
        placeholder="Buscar por dosis..."
      />
    </div>
    <div className="col mb-4">
      <label>Presentación</label>
      <select
        className="form-select"
        value={searchPackaging}
        onChange={(e) => setSearchPackaging(e.target.value)}
      >
        <option value="">Todas las presentaciones</option>
        {allPackaging.map((packaging, index) => (
          <option key={index} value={packaging}>
            {packaging}
          </option>
        ))}
      </select>
    </div>
    <div className="col mb-4 d-flex justify-content align-items-center">
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
                  <th>Clave</th>
                  <th>Nombre</th>
                  <th>Dosis</th>
                  <th>Presentación</th>
                  <th>Descripción</th>
                  <th> Cantidad</th>
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
                            setIdMedicine(item.id);
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
                            setIdMedicine(item.id);
                            setDataUserMedicine(item);
                            handleShowModalDelete();
                          }}
                        >
                          <MdDeleteForever
                            size={13}
                            onClick={() => {
                              setDataUserMedicine(item);
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