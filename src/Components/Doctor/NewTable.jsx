import "../../Css/DoctorCss.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const NewTable = ({ dataTable }) => {
  return (
    <>
      <h4>
        <small>Médicos</small>
      </h4>

      <div class="container">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Especialidad</th>
              <th>Telefono</th>
              <th id="disableCell">Dirección</th>
              <th id="disableCell">Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((infoDoctor) => (
              <tr>
                <td>{infoDoctor.name}</td>
                <td>{infoDoctor.specialty}</td>
                <td>{infoDoctor.phoneNumber}</td>
                <td id="disableCell">{infoDoctor.address}</td>
                <td id="disableCell">{infoDoctor.email}</td>

                <td class="td-actions text-right">
                  <button
                    type="button"
                    rel="tooltip"
                    class="btn btn-success btn-round btn-just-icon btn-sm"
                    data-original-title=""
                    title=""
                  >
                    <FontAwesomeIcon id="btnTable" icon={faPen} />
                  </button>
                  <button
                    type="button"
                    rel="tooltip"
                    class="btn btn-danger btn-round btn-just-icon btn-sm"
                    data-original-title=""
                    title=""
                  >
                    <FontAwesomeIcon id="btnTable" icon={faTrashCan} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
