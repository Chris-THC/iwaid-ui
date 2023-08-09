import { createContext, useState, useEffect } from "react";
import{
  getAllDateDataFunction,
  createDateFunction,
  deleteDateFunction,
  updateDateFunction
 
 } from "./DateData";
import {
  createPatientFunction,
  deletePatientFunction,
  getAllPatientDataFunction,
  updatePatientFunction,
} from "./PatientData.js";

import {
  getAllDoctorsDataFunction,
  createDoctorFunction,
  updateDoctorFunction,
  deleteDoctorFunction,
} from "./DoctorData.js";

export const GetTheAppContext = createContext();

export const AppContext = (props) => {
  const [dataGetAllDoctors, setGetDataAllDoctors] = useState([]);
  const [dataUserDoctor, setDataUserDoctor] = useState({});
  const [getDataFromTable, setGetDataFromTable] = useState({});

  const [actionButtonModal, setActionButtonModal] = useState("Agregar");

  const [textAlert, setTextAlert] = useState("");

  const [doctorId, setDoctorId] = useState("");

  const [getAllPatientsData, setGetAllPatientsData] = useState([]);
  const [dataUserPatient, setDataUserPatient] = useState({});
  const [patientId, setPatientId] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [dataGetAllDate, setAllDataDate] = useState([]);
  const [dataUserDate, setDataUserDate] = useState({});
  const [idDate, setIdDate] = useState("");
  const [Error, setError] = useState(false);

  const [doctorSelected, setDoctorSelected] = useState([]);

  const [patientSelected, setPatientSelected] = useState([]);
  useEffect(() => {
    getAllDoctorsDataFunction(setGetDataAllDoctors);
    getAllPatientDataFunction(setGetAllPatientsData);
    getAllDateDataFunction(setAllDataDate);
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [showFloatingAlert, setShowFloatingAlert] = useState(false);

  const handleShowFloatAlter = () => {
    setShowFloatingAlert(true);
  };

  const handleCloseFloatAlert = () => {
    setShowFloatingAlert(false);
  };

  return (
    <GetTheAppContext.Provider
      value={{
        handleCloseModal,
        handleShowModal,
        showModal,
        dataUserDoctor,
        setDataUserDoctor,
        dataUserPatient,
        setDataUserPatient,
        getDataFromTable,
        setGetDataFromTable,
        actionButtonModal,
        setActionButtonModal,
        handleShowFloatAlter,
        handleCloseFloatAlert,
        showFloatingAlert,
        textAlert,
        setTextAlert,
        dataGetAllDoctors,
        setGetDataAllDoctors,
        getAllDoctorsDataFunction,
        createDoctorFunction,
        updateDoctorFunction,
        doctorId,
        setDoctorId,
        deleteDoctorFunction,
        createPatientFunction,
        deletePatientFunction,
        getAllPatientDataFunction,
        updatePatientFunction,
        getAllPatientsData,
        setGetAllPatientsData,
        patientId,
        setPatientId,
        dataGetAllDate, 
        getAllDateDataFunction,
        setAllDataDate,
        dataUserDate,
        setDataUserDate,
        idDate, 
        setIdDate,
        doctorSelected, 
        setDoctorSelected,
        patientSelected, 
        setPatientSelected,
        createDateFunction,
        updateDateFunction,
        deleteDateFunction,
        Error, 
        setError
      }}
    >
      {props.children}
    </GetTheAppContext.Provider>
  );
};
