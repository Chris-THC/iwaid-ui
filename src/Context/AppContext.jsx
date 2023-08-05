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
  // TODO: This array data is for testing and I'll delete this one, when the API is ready.
  const [dataTest, setDataTest] = useState([
    {
      id: 1,
      patientId: 1,
      patient: {
        id: 1,
        name: "Elena Sánchez",
        dateOfBirth: "1985-10-15",
        gender: "Femenino",
        rfc: "efgh8510aebc2",
        address: "Calle Rosas 123",
        city: "Ciudad Salud",
        phoneNumber: "555-1234567",
        email: "elena@example.com",
      },
      doctorId: 1,
      doctor: {
        id: 1,
        name: "Dr. Rodríguez",
        specialty: "Cardiología",
        address: "Avenida Salud 456",
        phoneNumber: "555-9876543",
        email: "rodriguez@example.com",
      },
      date: "2023-08-04",
      description: "Tomar 1 tableta cada 12 horas después de las comidas.",
    },
    {
      id: 2,
      patientId: 2,
      patient: {
        id: 2,
        name: "Pedro Martínez",
        dateOfBirth: "1972-03-21",
        gender: "Masculino",
        rfc: "ijkl7203dcef1",
        address: "Calle Saludable 789",
        city: "Villa Vital",
        phoneNumber: "555-9871234",
        email: "pedro@example.com",
      },
      doctorId: 1,
      doctor: {
        id: 1,
        name: "Dr. Rodríguez",
        specialty: "Cardiología",
        address: "Avenida Salud 456",
        phoneNumber: "555-9876543",
        email: "rodriguez@example.com",
      },
      date: "2023-08-04",
      description: "Administrar 1 inyección al día durante 5 días.",
    },
    {
      id: 4,
      patientId: 3,
      patient: {
        id: 3,
        name: "María López",
        dateOfBirth: "1990-12-08",
        gender: "Femenino",
        rfc: "mnop9012ghij3",
        address: "Avenida Vitalidad 567",
        city: "Saludopolis",
        phoneNumber: "555-4567890",
        email: "maria@example.com",
      },
      doctorId: 2,
      doctor: {
        id: 2,
        name: "Dr. Pérez",
        specialty: "Dermatología",
        address: "Calle Piel Sana 789",
        phoneNumber: "555-2345678",
        email: "perez@example.com",
      },
      date: "2023-08-05",
      description:
        "Aplicar crema parecetamos de 500 en la zona afectada dos veces al día.",
    },
  ]);

  const [getDataFromTable, setGetDataFromTable] = useState({});
  const [actionButtonModal, setActionButtonModal] = useState("Agregar");
  const [textAlert, setTextAlert] = useState("");

  const [dataMedicalPrescription, setDataMedicalPrescription] = useState({});
  const [prescriptionPatientId, setPrescriptionPatientId] = useState("");
  const [prescriptionDoctorId, setPrescriptionDoctorId] = useState("");

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
        setPrescriptionPatientId,
        prescriptionPatientId,
        setPrescriptionDoctorId,
        prescriptionDoctorId,
      }}
    >
      {props.children}
    </GetTheAppContext.Provider>
  );
};
