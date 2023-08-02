import { createContext, useState, useEffect } from "react";
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

import {
    getAllMedicineDataFunction,
    createMedicineFunction,
    updateMedicineFunction,
    deleteMedicineFunction,
} from "./MedicineData.js";

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


  const [dataGetAllMedicine, setAllDataMedicine] = useState([]);
  const [dataUserMedicine, setDataUserMedicine] = useState({});
  const [idMedicine, setIdMedicine] = useState("");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getAllDoctorsDataFunction(setGetDataAllDoctors);
    getAllPatientDataFunction(setGetAllPatientsData);
    getAllMedicineDataFunction(setAllDataMedicine);
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
        dataUserMedicine,
        setDataUserMedicine,
        getDataFromTable,
        setGetDataFromTable,
        setDataFromTable,
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
        dataGetAllMedicine,
        setAllDataMedicine,
        getAllMedicineDataFunction,
        createMedicineFunction,
        updateMedicineFunction,
        idMedicine,
        setIdMedicine,
        deleteMedicineFunction,
      }}
    >
      {props.children}
    </GetTheAppContext.Provider>
  );
};
