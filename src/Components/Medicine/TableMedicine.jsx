import { useContext, useState } from "react";
import "../../Css/TableGenericCss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetTheAppContext } from "../../Context/AppContext";
import { ModalMedicine } from "./modal";
import { ModalDelete } from "../../ModalDelete/ModalDelete";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { statusOk } from "../HttpStatus/HTTPStatusCode";

import {
  faFilter,
  faPen,
  faTrashCan,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export const TableMedicine = ({ dataTable }) => {
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
    setActionButtonModal,
    setTextAlert,
    handleShowFloatAlter,
    setDataMedicineFromTable,
    setIdMedicine,
    setDataUserMedicine,
    setNameMedicine,
    idMedicine,
    deleteMedicineFunction,
    getAllMedicineDataFunction,
    setAllDataMedicine,
    nameMedicine,
    token,
  } = useContext(GetTheAppContext);

  const filters = dataTable
    ? [...new Set(dataTable.map((item) => item.dosageForms))]
    : [];
  const [searchName, setSearchName] = useState("");
  const [searchDoses, setSearchDoses] = useState("");
  const [searchDosageFormsMatches, SetSearchDosageFormsMatches] = useState("");

  const handleClear = () => {
    setSearchName("");
    setSearchDoses("");
    SetSearchDosageFormsMatches("");
  };

  const funtionToDeleted = async () => {
    setActionButtonModal("Eliminar");
    const responseModalDelete = await deleteMedicineFunction(idMedicine, token);

    if (responseModalDelete.status === statusOk) {
      await getAllMedicineDataFunction(setAllDataMedicine, token);
      setTextAlert(`Se eliminó ${nameMedicine}`);
      handleCloseModalDelete();
      handleShowFloatAlter();
    } else {
      handleCloseModalDelete();
      setTextAlert(`Error al eliminar medicamento`);

      handleShowFloatAlter();
    }
  };

  const AddNewMedicine = () => {
    return (
      <>
        <div>
          <h1>Medicamentos</h1>
        </div>
        <div className="col-12 d-flex flex-row-reverse ">
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
              <FontAwesomeIcon icon={faUserPlus} style={{ height: "18px" }} />
            </Button>
          </OverlayTrigger>
        </div>
      </>
    );
  };

  const MedicineTable = () => {
    return (
      <div id="tableConteiner" className="shadow bg-body rounded mb-4">
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Clave</th>
              <th>Nombre</th>
              <th id="disableCell">Dosis</th>
              <th>Presentación</th>
              <th id="disableCell">Descripción</th>
              <th id="disableCell">Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataTable
              .filter((item) => {
                const nameMatches = item.name
                  .toLowerCase()
                  .includes(searchName.toLowerCase());

                const doseMatches = item.dose.includes(searchDoses);

                const dosageFormsMatches = searchDosageFormsMatches
                  ? item.dosageForms.toLowerCase() ===
                    searchDosageFormsMatches.toLowerCase()
                  : true;

                return nameMatches && doseMatches && dosageFormsMatches;
              })
              .map((infoMedicine) => (
                <tr>
                  <td>{infoMedicine.code}</td>
                  <td>{infoMedicine.name}</td>
                  <td id="disableCell">{infoMedicine.dose}</td>
                  <td>{infoMedicine.dosageForms}</td>
                  <td id="disableCell" className="text-wrap">
                    {infoMedicine.description}
                  </td>
                  <td id="disableCell">{infoMedicine.quantity}</td>

                  <td className="td-actions text-center">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-clear">Editar</Tooltip>}
                    >
                      <button
                        type="button"
                        rel="tooltip"
                        className="btn btn btn-primary btn-round btn-just-icon btn-sm m-1"
                        onClick={() => {
                          handleShowModal();
                          setIdMedicine(infoMedicine.id);
                          setDataMedicineFromTable(infoMedicine);
                          setActionButtonModal("Editar");
                        }}
                      >
                        <FontAwesomeIcon id="btnTable" icon={faPen} />
                      </button>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-clear">Eliminar</Tooltip>}
                    >
                      <button
                        type="button"
                        rel="tooltip"
                        className="btn btn-danger btn-round btn-just-icon btn-sm"
                        onClick={() => {
                          setIdMedicine(infoMedicine.id);
                          setDataUserMedicine(infoMedicine);
                          setNameMedicine(infoMedicine.name);
                          handleShowModalDelete();
                        }}
                      >
                        <FontAwesomeIcon id="btnTable" icon={faTrashCan} />
                      </button>
                    </OverlayTrigger>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        {Array.isArray(dataTable) ? (
          <>
            <div className="container mb-3 row">
              <div className="container mb-3">
                <AddNewMedicine />

                <div className="row cont-filtros">
                  <div className="col-md-3 mb-3">
                    <h4>Nombre</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        autoComplete="off"
                        type="text"
                        className="form-control inputTable"
                        value={searchName}
                        onChange={(e) => {
                          setSearchName(e.target.value);
                          setSearchDoses("");
                          SetSearchDosageFormsMatches("");
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[a-zA-Z\sÀ-ÖØ-öø-ÿ]+$"
                      />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <h4>Dosis</h4>
                    <div id="DivinputSearch">
                      <input
                        id="inputSearch"
                        autoComplete="off"
                        type="text"
                        className="form-control inputTable"
                        value={searchDoses}
                        onChange={(e) => {
                          setSearchDoses(e.target.value);
                          setSearchName("");
                          SetSearchDosageFormsMatches("");
                        }}
                        placeholder="Buscar por dosis..."
                        pattern="^[a-zA-Z\sÀ-ÖØ-öø-ÿ]+$"
                      />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <h4>Presentación</h4>
                    <div id="DivinputSearch">
                      <select
                        id="inputSearch"
                        className="form-control inputTable"
                        value={searchDosageFormsMatches}
                        onChange={(e) => {
                          SetSearchDosageFormsMatches(e.target.value);
                          setSearchDoses("");
                          setSearchName("");
                        }}
                      >
                        <option value="">Todas las presentaciones</option>
                        {filters.map((iteratorTable, index) => (
                          <option key={index} value={iteratorTable}>
                            {iteratorTable}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-3 ml-4 col-md-2 d-flex justify-content align-items-center">
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
                        <FontAwesomeIcon
                          color="#fff"
                          icon={faFilter}
                          style={{ height: "18px" }}
                        />
                      </button>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>

            <MedicineTable />
          </>
        ) : (
          <div>
            <h3>Falla en la conexion con la base de datos</h3>
          </div>
        )}
      </div>

      <ModalMedicine show={showModal} handleClose={handleCloseModal} />
      <ModalDelete
        show={showModalDelete}
        handleClose={handleCloseModalDelete}
        funtionToDeleted={funtionToDeleted}
        messageToDelete={"¿Está seguro de que desea eliminar este medicamento?"}
      />
    </>
  );
};
