import React, { useContext } from "react";
import { ModalPatient } from "./ModalPatient";
import { GetTheAppContext } from "../../Context/AppContext";
import "../../Css/Table.css";
import { MdDeleteForever } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";
import { Button } from "react-bootstrap";

export const TablePatient = ({ dataTable }) => {
  const {
    handleShowModal,
    handleCloseModal,
    showModal,
    setGetDataFromTable,
    setActionButtonModal,
  } = useContext(GetTheAppContext);

  const displayedFields = ["nombre", "fechaNacimiento", "ciudad", "telefono"];

  return (
    <div className="container mt-5">
      <div className=" card mt-4 row ">
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
              Agregar
            </Button>
          </div>
        </div>

        <div className="card-header col-md-12">
          <div className=" card-body table-responsive">
            <table className="table table-bordered custom-table text-center">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha de Nacimiento</th>
                  <th>Ciudad</th>
                  <th>Teléfono</th>
                  <th>Opcion</th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map((item, index) => (
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
                        onClick={() => console.log(item.nombre)}
                      >
                        <MdDeleteForever
                          id="btnDeletePatient"
                          className="btn-icon-lg"
                        />
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
                        <MdChangeCircle className="btn-icon-lg" />
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
