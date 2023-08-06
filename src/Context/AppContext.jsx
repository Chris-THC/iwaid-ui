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

import {
  allPrescriptionsFromApiFunction,
  createPrescriptionFunction,
  deletePrescriptionFunction,
} from "./Prescription.js";

export const GetTheAppContext = createContext();

export const AppContext = (props) => {
  const [getDataFromTable, setGetDataFromTable] = useState({});
  const [actionButtonModal, setActionButtonModal] = useState("Agregar");
  const [textAlert, setTextAlert] = useState("");

  const [medicalPrescriptionData, setMedicalPrescriptionData] = useState({});
  const [prescriptionPatientId, setPrescriptionPatientId] = useState("");
  const [prescriptionDoctorId, setPrescriptionDoctorId] = useState("");
  const [allPrescriptionsData, setAllPrescriptionsData] = useState([]);
  const [dataPrescription, setPrescription] = useState({});

  const [doctorId, setDoctorId] = useState("");
  const [dataGetAllDoctors, setGetDataAllDoctors] = useState([]);
  const [dataUserDoctor, setDataUserDoctor] = useState({});

  const [getAllPatientsData, setGetAllPatientsData] = useState([]);
  const [dataUserPatient, setDataUserPatient] = useState({});
  const [patientId, setPatientId] = useState("");

  const [dataGetAllMedicine, setAllDataMedicine] = useState([]);
  const [dataUserMedicine, setDataUserMedicine] = useState({});
  const [idMedicine, setIdMedicine] = useState("");
  const [dataMedicineFromTable, setDataMedicineFromTable] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [nameMedicine, setNameMedicine] = useState(false);

  useEffect(() => {
    getAllDoctorsDataFunction(setGetDataAllDoctors);
    getAllPatientDataFunction(setGetAllPatientsData);
    getAllMedicineDataFunction(setAllDataMedicine);
    allPrescriptionsFromApiFunction(setAllPrescriptionsData);
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
        medicalPrescriptionData,
        setMedicalPrescriptionData,
        dataUserDoctor,
        setDataUserDoctor,
        dataUserPatient,
        setDataUserPatient,
        dataUserMedicine,
        setDataUserMedicine,
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
        dataGetAllMedicine,
        setAllDataMedicine,
        getAllMedicineDataFunction,
        createMedicineFunction,
        updateMedicineFunction,
        idMedicine,
        setIdMedicine,
        deleteMedicineFunction,
        dataMedicineFromTable,
        setDataMedicineFromTable,
        nameMedicine,
        setNameMedicine,
        setPrescriptionPatientId,
        prescriptionPatientId,
        setPrescriptionDoctorId,
        prescriptionDoctorId,

        allPrescriptionsData,
        setAllPrescriptionsData,
        createPrescriptionFunction,
        allPrescriptionsFromApiFunction,
        dataPrescription,
        setPrescription,
        deletePrescriptionFunction,
      }}
    >
      {props.children}
    </GetTheAppContext.Provider>
  );
};
