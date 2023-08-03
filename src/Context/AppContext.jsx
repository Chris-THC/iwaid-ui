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
  // TODO: This array data is for testing and I'll delete this one.
  const [dataTest, setDataTest] = useState([
    {
      nombre: "Juan Pérez",
      medico: "Dr. Ana García",
      fecha: "2023-07-23",
      medicamentos:
        "Paracetamol (500mg) - Cada 8 horas (Para el dolor), Amoxicilina (875mg) - Cada 12 horas (Para la infección)",
      descripcion: "Paciente con fiebre y dolor de garganta.",
    },
    {
      nombre: "Juan Hernandez",
      medico: "Dr. Luis Ramírez",
      fecha: "2023-07-25",
      medicamentos:
        "Paracetamol (500mg) - Cada 8 horas (Para el dolor), Amoxicilina (875mg) - Cada 12 horas (Para la infección)",
      descripcion: "Infección respiratoria leve.",
    },
    {
      nombre: "María López",
      medico: "Dr. Luis Ramírez",
      fecha: "2023-07-22",
      medicamentos: "Ibuprofeno (400mg) - Cada 6 horas (Para la inflamación)",
      descripcion: "Dolor muscular después de hacer ejercicio.",
    },
    {
      nombre: "Carlos Gómez",
      medico: "Dra. Laura Martínez",
      fecha: "2023-07-21",
      medicamentos:
        "Loratadina (10mg) - Cada 24 horas (Para las alergias), Dexametasona (2mg) - Cada 12 horas (Para la inflamación aguda)",
      descripcion: "Alergia estacional con inflamación en los ojos.",
    },
    {
      nombre: "Ana Castro",
      medico: "Dr. Roberto Fernández",
      fecha: "2023-07-20",
      medicamentos:
        "Omeprazol (20mg) - Cada 24 horas (Para la acidez estomacal)",
      descripcion: "Malestar estomacal y acidez después de las comidas.",
    },
  ]);

  const [dataMedicalPrescription, setDataMedicalPrescription] = useState({});

  const [getDataFromTable, setGetDataFromTable] = useState({});
  const [actionButtonModal, setActionButtonModal] = useState("Agregar");
  const [textAlert, setTextAlert] = useState("");

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
        dataMedicalPrescription,
        setDataMedicalPrescription,
        dataTest,
        setDataTest,
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
      }}
    >
      {props.children}
    </GetTheAppContext.Provider>
  );
};
