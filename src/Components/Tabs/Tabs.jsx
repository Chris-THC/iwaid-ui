import React from "react";
import { NavLink } from "react-router-dom";
import "../../Css/NavLink.css";

export const Tabs = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            id="navLinkColor"
            className="nav-link"
            aria-current="page"
            to="/patient/medical/information"
          >
            Informacion Personal
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            id="navLinkColor"
            className="nav-link"
            to="/patient/medical/dates"
          >
            Citas programadas
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            id="navLinkColor"
            className="nav-link"
            to="/patient/medical/prescriptions"
          >
            Recetas medicas
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            id="navLinkColor"
            className="nav-link"
            to="/patient/medical/history"
          >
            Historial Médico
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
