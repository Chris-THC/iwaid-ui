import React, { useState } from "react";
import { Link } from "react-router-dom";
import { showLogoImage } from "../Components/Initation/Initation";
import '../Css/imagesCss.css';
import Icon from "../Assets/Icons/icons"

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
    <div className="container">
      <div className="container-fluid">
    <nav className="sidebar">
    
  <div className="sidebar-header">
  <Link 
            className="nav-link active d-flex flex-row mb-2 w-100"  aria-current="page" to="/">
         <div className="p-2">{showLogoImage()}</div>
          <div className="p-2 mt-3 fw-bold">IWA</div>
        </Link>
        <Link aria-current="page" to="/">
        <button type="button" class="btn btn-outline w-100 shadow"   style={{ borderColor: "#fd7e14", color: "#fd7e14" }}>Volver </button>
        </Link>
  </div>
  <button
            className={`navbar-toggler ${isMenuOpen ? "" : "collapsed"}`}
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
        ><span className="navbar-toggler-icon" />
            </button>
  <ul className="sidebar-menu">
    <li onClick={toggleDataMaster} className={`menu-item dropdown ${isDataMasterOpen ? 'open' : ''}`}>
      <div className="menu-title">
        <a>
          <i className="bi bi-file-earmark-text" /> <Icon type={"date"}/> Datos Maestros <Icon type="next" m={"me-3"} />
        </a>
        <span className="toggle-icon">
          <i className={`bi ${isDataMasterOpen ? 'bi-chevron-down' : 'bi-chevron-right'}`} />
        </span>
      </div>
      <ul className={`sub-menu ${isDataMasterOpen ? 'open' : ''}`}>
        <li>
          <Link to="/doctor" onClick={toggleDataMaster}>Doctor</Link>
        </li>
        <li>
          <Link to="/patient" onClick={toggleDataMaster}>Paciente</Link>
        </li>
        <li>
          <Link to="/medicine" onClick={toggleDataMaster}>Medicamento</Link>
        </li>
      </ul>
    </li>

    {/* Consulta */}
    <li onClick={toggleDates} className={`menu-item dropdown ${isDatesOpen ? 'open' : ''}`}>
      <div className="menu-title">
        <a>
          <i className="bi bi-calendar" /> <Icon type={"data"}/>Consulta <Icon type="next" m={"mt-1"}/>
        </a>
        <span className="toggle-icon">
          <i className={`bi ${isDatesOpen ? 'bi-chevron-down' : 'bi-chevron-right'}`} />
        </span>
      </div>
      <ul className={`sub-menu ${isDatesOpen ? 'open' : ''}`}>
        <li>
          <Link to="/calendar" onClick={toggleDates}>Agenda</Link>
        </li>
        <li>
          <Link to="/prescriptions" onClick={toggleDates}>Prescripciones Médicas</Link>
        </li>
        <li>
          <Link to="/medical-history" onClick={toggleDates}>Historial Médico</Link>
        </li>
      </ul>
    </li>
  </ul>
</nav>
</div>
</div>

  );
};
