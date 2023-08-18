import React, { useState, useContext } from "react";
import "../../Css/CssTable.css";
import { GetTheAppContext } from "../../Context/AppContext";
import { ModalGeneric } from "../../Layouts/Modal/modal";
import { ModalDelete } from "../../Layouts/Modal/ModalDelete";
import Icon from "../../Assets/Icons/icons"
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
    setDataMedicineFromTable,
    setActionButtonModal,
    setIdMedicine,
    setDataUserMedicine,
    setNameMedicine,
    idMedicine,
    deleteMedicineFunction,
    getAllMedicineDataFunction,
    setAllDataMedicine,
    setTextAlert,
    handleShowFloatAlter,
    nameMedicine,
    setGetDataFromTable
  } = useContext(GetTheAppContext);

  const displayedFields = [
    "code",
    "name",
    "dose",
    "dosageForms",
    "description",
    "quantity",
  ];

  const filters = data
    ? [...new Set(data.map((item) => item.dosageForms))]
    : [];
  const [searchName, setSearchName] = useState("");
  const [searchDoses, setSearchDoses] = useState("");
  const [searchDosageFormsMatches, SetSearchDosageFormsMatches] = useState("");

  const handleClear = () => {
    setSearchName("");
    setSearchDoses("");
    SetSearchDosageFormsMatches("");
  };

  const filteredData = data.filter((item) => {
    const nameMatches = item.name
      .toLowerCase()
      .includes(searchName.toLowerCase());

    const doseMatches = item.dose.includes(searchDoses);

    const dosageFormsMatches = searchDosageFormsMatches
      ? item.dosageForms.toLowerCase() ===
        searchDosageFormsMatches.toLowerCase()
      : true;

    return nameMatches && doseMatches && dosageFormsMatches;
  });

  const funtionToDeleted = async () => {
    setActionButtonModal("Eliminar");
    const responseModalDelete = await deleteMedicineFunction(idMedicine);

    if (responseModalDelete.status === statusOk) {
      await getAllMedicineDataFunction(setAllDataMedicine);
      setTextAlert(`Se eliminó ${nameMedicine}`);
      handleCloseModalDelete();
      handleShowFloatAlter();
    } else {
      handleCloseModalDelete();
      setTextAlert(`Error al eliminar medicamento`);

      handleShowFloatAlter();
    }
  };

  return (
    <>
    <div class="me-2" style={{marginLeft: "20%", color: "#161F61"}} >
            <h2 className="card-title mt-3 ms-5 fw-bold" >{title}</h2>
            <div className="row mt-3 " style={{color: "#161F61" }}>
                     <div className="col mb-4 ms-5 fw-semibold" >
                       <label  >Nombre</label>
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control shadow"
                        value={searchName}
                        onChange={(e) => {
                          setSearchName(e.target.value);
                          setSearchDoses("");
                          SetSearchDosageFormsMatches("");
                        }}
                        placeholder="Buscar por nombre..."
                        pattern="^[A-Za-z\s]+$"
                      />
                    </div>
                    <div className="col mb-4 fw-semibold">
                      <label>Dosis</label>
                      <input
                        type="number"
                        className="form-control shadow"
                        value={searchDoses}
                        onChange={(e) => {
                          setSearchDoses(e.target.value);
                          setSearchName("");
                          SetSearchDosageFormsMatches("");
                        }}
                        placeholder="Buscar por dosis..."
                      />
                    </div>
                    <div className="col mb-4 fw-semibold">
                      <label>Presentación</label>
                      <select
                        className="form-select shadow"
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
                    <div className="col mb-4 pt-4 d-flex justify-content align-items-center">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-clear">Limpiar</Tooltip>}
                      >
                        <button
                          id="iconoClear"
                          className="btn shadow"
                          type="button"
                          onClick={handleClear}
                        >
                          
                          <Icon type={"filter"} color="white" />
                        </button>
                      </OverlayTrigger>
                     </div>
                  
         

           <div className="d-grid gap-2 d-md-flex justify-content-end  w-25 mt-4">
             <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-clear">Agregar</Tooltip>}
            >
              <Button
                id="btnAdd"
                className="btn me-md-2 border-warning w-100 shadow"
                style={{ backgroundColor: "#fd7e14" }}
                variant="primary"
                onClick={() => {
                  handleShowModal();
                  setGetDataFromTable("");
                  setActionButtonModal("Agregar");
                }}
              > <p className="fw-bold h6 justify-content align-items-center "> Agregar</p>
                {/* <Icon type={"add"} size={18}/> */}
              </Button>
            </OverlayTrigger>
          </div>
          <div class="mt-2" >
    <table class="table  custom-table text-center" style={{color: "#161F61" }}>
  <thead>
                <tr>
                  <th style={{color: "#161F61" }}>Clave</th>
                  <th style={{color: "#161F61" }}>Nombre</th>
                  <th style={{color: "#161F61" }}>Dosis</th>
                  <th style={{color: "#161F61" }}>Presentación</th>
                  <th style={{color: "#161F61" }}>Descripción</th>
                  <th style={{color: "#161F61" }}>Cantidad</th>
                  <th style={{color: "#161F61" }}>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    {displayedFields.map((field) => (
                      <td key={field}>
                        <div id="idTextMedicine" className="d-inline fw-semibold" style={{color: "#171D45" }}>
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
                          className="ms-2 me-2 mb-2 mt-2 rounded-circle shadow"
                          variant="primary"
                          onClick={() => {
                            handleShowModal();
                            setIdMedicine(item.id);
                            setDataMedicineFromTable(item);
                            setGetDataFromTable(item);
                            setActionButtonModal("Editar");
                          }}
                        >
                          
                          <Icon type={"edit"} className="btn-icon-lg"/>
                        </Button>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-clear">Eliminar</Tooltip>}
                      >
                        <Button
                          size={16}
                          id="btnTables"
                          className="ms-2 me-2 mb-2 mt-2 d-inline rounded-circle shadow"
                          variant="danger"
                          onClick={() => {
                            setIdMedicine(item.id);
                            setDataUserMedicine(item);
                            setNameMedicine(item.name);
                            handleShowModalDelete();
                          }}
                        >
                          
                          <Icon type={"delete"} size={13}
                            id="btnDeleteMedicine"
                            className="btn-icon-lg"/>
                        </Button>
                      </OverlayTrigger>
                    </td>
                  </tr>
                ))}
              </tbody>
</table>
<ModalGeneric show={showModal} handleClose={handleCloseModal} title={"Medicamento"} type={"medicine"} />
         <ModalDelete
            show={showModalDelete}
            handleClose={handleCloseModalDelete}
            funtionToDeleted={funtionToDeleted}
            messageToDelete={
              "¿Está seguro de que desea eliminar este medicamento?"
            }
          />
          
           </div>
           </div>
           </div>

          </>
   
  );
}
