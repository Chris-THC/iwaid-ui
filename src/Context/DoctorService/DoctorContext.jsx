import { createContext, useState, useEffect } from "react";
import {
    getAllDoctorsDataFunction,
    createDoctorFunction,
    updateDoctorFunction,
    deleteDoctorFunction,
  } from "./DoctorData.js";

  export const GetTheDoctorContext = createContext();
  
  export const AppContext = (props) => {
  const [doctorId, setDoctorId] = useState("");
  const [dataGetAllDoctors, setGetDataAllDoctors] = useState([]);
  const [dataUserDoctor, setDataUserDoctor] = useState({});

  return (
    <GetTheDoctorContext.Provider
      value={{
  dataGetAllDoctors,
  setGetDataAllDoctors,
  getAllDoctorsDataFunction,
  createDoctorFunction,
  updateDoctorFunction,
  doctorId,
  setDoctorId,
  deleteDoctorFunction,
}}
>
  {props.children}
</GetTheDoctorContext.Provider>
);
};