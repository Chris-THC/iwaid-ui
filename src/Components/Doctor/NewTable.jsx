import React from "react";
import "../../Css/NewTable.css";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const NewTable = () => {
  return (
    <div class="container-fluid">
      <div class="col-lg-12 col-md-11 ml-auto mr-auto">
        <h4>
          <small>Médicos</small>
        </h4>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Job Position</th>
                <th>Since</th>
                <th>Descripction</th>
                <th>More things</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Design</td>
                <td>2012</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </td>
                <td>2012</td>
                <td class="text-right">€ 89,241</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
