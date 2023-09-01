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
            to="/patient/home/"
          >
            Informacion Personal
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            id="navLinkColor"
            className="nav-link"
            to="/patient/home/medical/dates"
          >
            Citas programadas
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            id="navLinkColor"
            className="nav-link"
            to="/patient/home/medical/prescriptions"
          >
            Recetas medicas
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            id="navLinkColor"
            className="nav-link"
            to="/patient/home/medical/history"
          >
            Historial Médico
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
