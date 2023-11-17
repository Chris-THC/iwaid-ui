import { useContext } from "react";
import { GetTheAppContext } from "../Context/AppContext";
import logoImage from "../Img/image-logoInvertido.png";
import { NavBar } from "./NavBar";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Doctor } from "./Routes/Doctor";
import { Patient } from "./Routes/Patient";
import { Medicine } from "./Routes/Medicine";
import { Calendar } from "./Routes/Calendar";
import { Prescriptions } from "./Routes/Prescriptions";
import { MedicalHistory } from "./Routes/MedicalHistory";
import { PatientHomePage } from "./Routes/PatientHomePage";
import { PersonalDates } from "./Tabs/pages/PersonalDates";
import { PersonalHistory } from "./Tabs/pages/PersonalHistory";
import { PaypalSales } from "./Tabs/pages/Paypal";
import { PersonalPrescriptions } from "./Tabs/pages/PersonalPrescriptions";
import { Personalformation } from "./Tabs/pages/Personalformation";
import { Login } from "./Logs/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import {
  ProtectedRoutes,
  ProtectedRoutesPatient,
} from "./Routes/ProtectedRoutes";

export function Conteiner() {
  const { isLoggedIn, setIsLoggedIn, setUser, user, userRoll } =
    useContext(GetTheAppContext);

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const NotFound = () => {
    return (
      <div className="container alert alert-danger">
        <h1 className="text-center">
          Lo sentimos, la página que estás buscando no se encuentra disponible.
        </h1>
      </div>
    );
  };

  const ShowPrincipalImage = () => {
    return (
      <div style={{ margin: "0", padding: "0" }}>
        <img id="logoImgPrincipal" src={logoImage} alt="Imagen Logo" />
      </div>
    );
  };

  const IsLoggedInComponent = () => {
    return isLoggedIn === false ? (
      <>
        <Link
          className="nav-link active my-custom-margin mb-2 mt-2 text-light"
          to="/login"
          id="linkNavMenu"
        >
          <FontAwesomeIcon
            className="ms-6 me-2"
            icon={faRightFromBracket}
            style={{ color: "#ffffff", height: "20px" }}
          />
          Iniciar Sesión
        </Link>
      </>
    ) : (
      <>
        <Link
          onClick={() => {
            logout();
          }}
          className="nav-link active my-custom-margin mb-2 mt-2 text-light"
          to="/"
          id="linkNavMenu"
        >
          <FontAwesomeIcon
            className="ms-6 me-2"
            icon={faRightFromBracket}
            style={{
              color: "#ffffff",
              height: "20px",
              transform: "scaleX(-1)",
            }}
          />
          Cerrar Sesión
        </Link>
      </>
    );
  };

  const ShowNavBarInformation = () => {
    return (
      <div id="idBarNavContent" className="d-flex">
        <Link
          className="nav-link active my-custom-margin mb-2 mt-2 "
          aria-current="page"
          to="/"
        >
          <ShowPrincipalImage />
        </Link>

        <div id="infoNanBar">
          <p className="text-light m-3">
            Córdoba (271) 714 5350 | Orizaba (272) 123 5049 | Veracruz (229) 980
            8463
          </p>

          <p>
            <IsLoggedInComponent />
          </p>
        </div>
      </div>
    );
  };

  return (
    <div id="conteinerTables">
      <ShowNavBarInformation />

      <NavBar style={{ "z-index": 1000 }} />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/doctor"
          element={
            <ProtectedRoutes user={user} userRoll={userRoll}>
              <Doctor />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/patient"
          element={
            <ProtectedRoutes user={user} userRoll={userRoll}>
              <Patient />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/medicine"
          element={
            <ProtectedRoutes user={user} userRoll={userRoll}>
              <Medicine />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/calendar"
          element={
            <ProtectedRoutes user={user} userRoll={userRoll}>
              <Calendar />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/prescriptions"
          element={
            <ProtectedRoutes user={user} userRoll={userRoll}>
              <Prescriptions />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/medical/history"
          element={
            <ProtectedRoutes user={user} userRoll={userRoll}>
              <MedicalHistory />
            </ProtectedRoutes>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/patient/medical/*" element={<PatientHomePage />}>
          <Route
            path="information"
            element={
              <ProtectedRoutesPatient user={user} userRoll={userRoll}>
                <Personalformation />
              </ProtectedRoutesPatient>
            }
          />
          <Route
            path="dates"
            element={
              <ProtectedRoutesPatient user={user} userRoll={userRoll}>
                <PersonalDates />
              </ProtectedRoutesPatient>
            }
          />
          <Route
            path="prescriptions"
            element={
              <ProtectedRoutesPatient user={user} userRoll={userRoll}>
                <PersonalPrescriptions />
              </ProtectedRoutesPatient>
            }
          />
          <Route
            path="history"
            element={
              <ProtectedRoutesPatient user={user} userRoll={userRoll}>
                <PersonalHistory />
              </ProtectedRoutesPatient>
            }
          />

          <Route
            path="pay"
            element={
              <ProtectedRoutesPatient user={user} userRoll={userRoll}>
                <PaypalSales />
              </ProtectedRoutesPatient>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
