import React from "react";
import { Menu } from "./Menu";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Doctor } from "./Routes/Doctor";
import { Patient } from "./Routes/Patient";
import { Medicine } from "./Routes/Medicine";
import { Calendar } from "./Routes/Calendar";
import { Prescriptions } from "./Routes/Prescriptions";

export function Conteiner() {
  const NotFound = () => {
    return (
      <div className=" container alert alert-danger">
        <h1 className="text-center">
          Lo sentimos, la página que estás buscando no se encuentra.
        </h1>
      </div>
    );
  };

  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
