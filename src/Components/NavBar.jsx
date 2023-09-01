import React, { useState } from "react";
import "../Css/navBar.css";
import { Link } from "react-router-dom";
import {
  faUser,
  faUserDoctor,
  faNotesMedical,
  faBriefcaseMedical,
  faPills,
  faCalendarDays,
  faFileWaveform,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img3 from "../Img/image-logoInvertido.png";

export const NavBar = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleHamburgerClick = () => {
    hamburgerCross();
  };

  const hamburgerCross = () => {
    if (isClosed) {
      setIsClosed(false);
    } else {
      setIsClosed(true);
    }
  };

  return (
    <>
      <div id="wrapper" className={isClosed ? "toggled" : ""}>
        <nav
          className={`navbar navbar-inverse fixed-top ${
            isClosed ? "toggled" : ""
          }`}
          id="sidebar-wrapper"
          role="navigation"
        >
          <ul className="nav sidebar-nav">
            <div className="sidebar-header">
              <div className="sidebar-brand">
                <Link to="/">
                  <div style={{ marginBottom: "20px" }}>
                    <img
                      style={{
                        height: "70px",
                        width: "160px",
                      }}
                      src={img3}
                      alt="img"
                    />
                  </div>
                </Link>
              </div>
            </div>

            <li className="nav-item dropdown position-relative">
              <a
                href="#works"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon
                  className="ms-6 me-2"
                  icon={faNotesMedical}
                  style={{ color: "#ffffff", height: "20px" }}
                />
                Datos Maestros <span className="caret" />
              </a>
              <ul className="dropdown-menu animated fadeInLeft">
                <li>
                  <Link className="dropdown-item" to="/doctor">
                    <FontAwesomeIcon
                      className="ms-6 me-2"
                      icon={faUserDoctor}
                      style={{ color: "#ffffff", height: "20px" }}
                    />
                    Doctor
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/patient">
                    <FontAwesomeIcon
                      className="ms-6 me-2"
                      icon={faUser}
                      style={{ color: "#ffffff", height: "20px" }}
                    />
                    Paciente
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/medicine">
                    <FontAwesomeIcon
                      className="ms-6 me-2"
                      icon={faPills}
                      style={{ color: "#ffffff", height: "20px" }}
                    />
                    Medicamento
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown position-relative">
              <a
                href="#works"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon
                  className="ms-6 me-2"
                  icon={faBriefcaseMedical}
                  style={{ color: "#ffffff", height: "20px" }}
                />
                Consultas <span className="caret" />
              </a>
              <ul className="dropdown-menu animated fadeInLeft">
                <li>
                  <Link className="dropdown-item" to="/calendar">
                    <FontAwesomeIcon
                      className="ms-6 me-2"
                      icon={faCalendarDays}
                      style={{ color: "#ffffff", height: "20px" }}
                    />
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/prescriptions">
                    <FontAwesomeIcon
                      className="ms-6 me-2"
                      icon={faFileWaveform}
                      style={{ color: "#ffffff", height: "20px" }}
                    />
                    Prescripciones Medicas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/medical/history">
                    <FontAwesomeIcon
                      className="ms-6 me-2"
                      icon={faHeartPulse}
                      style={{ color: "#ffffff", height: "20px" }}
                    />
                    Historial Médico
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div id="page-content-wrapper">
          <button
            type="button"
            className={`hamburger animated fadeInLeft ${
              isClosed ? "is-open" : "is-closed"
            }`}
            onClick={handleHamburgerClick}
          >
            <span style={{ backgroundColor: "#fff" }} className="hamb-top" />
            <span style={{ backgroundColor: "#fff" }} className="hamb-middle" />
            <span style={{ backgroundColor: "#fff" }} className="hamb-bottom" />
          </button>
        </div>
      </div>
    </>
  );
};
