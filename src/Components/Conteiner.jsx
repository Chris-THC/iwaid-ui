import React from "react";
import { MenuHamburger } from "./MenuHamburger";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Doctor } from "./Routes/Doctor";
import { Patient } from "./Routes/Patient";
import { Medicine } from "./Routes/Medicine";
import { Calendar } from "./Routes/Calendar";

export function Conteiner() {
  const NotFound = () => {
    return (
      <div className=" container alert alert-danger">
        <h1 className="text-center">404 - Página no encontrada</h1>
        <p className="text-center">Lo sentimos, la página que estás buscando no existe.</p>
      </div>
    );
  };

  return (
    <div>
      <MenuHamburger />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
