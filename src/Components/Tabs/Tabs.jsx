import React from "react";
import { Link } from "react-router-dom";

export const Tabs = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/patient/personal/information"
          >
            Informacion Personal
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/patient/medical/dates">
            Citas programadas
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/patient/medical/prescriptions">
            Recetas medicas
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/patient/medical/history">
            Historial Médico
          </Link>
        </li>
      </ul>
    </div>
  );
};
