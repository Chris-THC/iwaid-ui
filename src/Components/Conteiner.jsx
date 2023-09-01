import React from "react";
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
// TODO:This sectios is the patient personal information
// import { PersonalDates } from "./Tabs/routes/PersonalDates";
// import { PersonalHistory } from "./Tabs/routes/PersonalHistory";
// import { PersonalPrescriptions } from "./Tabs/routes/PersonalPrescriptions";
// import { Personalformation } from "./Tabs/routes/Personalformation";
// import { Tabs } from "./Tabs/Tabs";

export function Conteiner() {
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

  return (
    <div id="conteinerTables">
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
        </div>
      </div>

      <NavBar style={{ "z-index": 1000 }} />

      {/* {isPatientRegister ? <Tabs /> : null} */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/medical/history" element={<MedicalHistory />} />
        <Route path="/patient/home/*" element={<PatientHomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
