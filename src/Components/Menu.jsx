import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMG } from "./Initation/Initation";
import '../Css/imagesCss.css';

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDataMasterOpen, setIsDataMasterOpen] = useState(false);
  const [isDatesOpen, setIsDatesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const toggleDataMaster = () => {
    setIsDataMasterOpen((prevIsDatosMaestrosOpen) => !prevIsDatosMaestrosOpen);
  };

  const toggleDates = () => {
    setIsDatesOpen((prevIsCitasOpen) => !prevIsCitasOpen);
  };

  return (
    <nav className="navbar navbar-light shadow p-3 mb-2  " style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        <p className="navbar-brand mr-2 ">
        <Link 
        className="nav-link active" aria-current="page" to="/">
          <IMG/>
          
          </Link>
        </p>
        <button
          className={`navbar-toggler ${isMenuOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
            
            <li
              className={`nav-item dropdown ${isDataMasterOpen ? "show" : ""}`}
              style={{ backgroundColor: "#e3f2fd" }}
            >
              <p
              style={{ backgroundColor: "#e3f2fd" }}
                className="nav-link dropdown-toggle " 
                id="Dropdown"
                role="button"
                onClick={toggleDataMaster}
                aria-expanded={isDataMasterOpen}
              >
                Datos Maestros
              </p>
              <ul
                className={`dropdown-menu ${isDataMasterOpen ? "show" : ""}`}
                style={{ backgroundColor: "#e3f2fd" }}
                aria-labelledby="datosMaestrosDropdown"
                id="iwa-menu"
              >
                <li>
                  <Link
                    id="Dropdown"
                    className="dropdown-item"
                    to="/doctor"
                    onClick={toggleDataMaster}
                    aria-expanded={isDataMasterOpen}
                  >
                    Doctor
                  </Link>
                </li>
                <li>
                  <Link
                  id="Dropdown"
                    className="dropdown-item"
                    to="/patient"
                    onClick={toggleDataMaster}
                    aria-expanded={isDataMasterOpen}
                  >
                    Paciente
                  </Link>
                </li>
                <li>
                  <Link
                  id="Dropdown"
                    className="dropdown-item"
                    to="/medicine"
                    onClick={toggleDataMaster}
                    aria-expanded={isDataMasterOpen}
                  >
                    Medicamento
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`nav-item dropdown ${isDatesOpen ? "show" : ""}`}>
              <p
                className="nav-link dropdown-toggle"
                style={{ backgroundColor: "#e3f2fd" }}
                id="Dropdown"
                role="button"
                onClick={toggleDates}
                aria-expanded={isDatesOpen}
              >
                Consulta
              </p>
              <ul
                className={`dropdown-menu ${isDatesOpen ? "show" : ""}`}
                style={{ backgroundColor: "#e3f2fd" }}
                aria-labelledby="citasDropdown"
                id="iwa-menu"
              >
                <li>
                  <Link
                  id="Dropdown"
                    className="dropdown-item"
                    to="/calendar"
                    onClick={toggleDates}
                    aria-expanded={isDatesOpen}
                  >
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link
                  id="Dropdown"
                    className="dropdown-item"
                    to="/prescriptions"
                    onClick={toggleDates}
                    aria-expanded={isDatesOpen}
                  >
                    Prescripciones Médicas
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
