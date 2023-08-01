import { createContext, useState, useEffect } from "react";
import {
  createPatientFunction,
  deletePatientFunction,
  getAllPatientDataFunction,
  updatePatientFunction,
} from "./PatientData.js";
export const GetTheAppContext = createContext();

export const AppContext = (props) => {
  const [getAllPatientsData, setGetAllPatientsData] = useState([]);
  
  //TODO: This data is for testing purposes, it should be removed when the app is ready.
  const [dataTest, setDataTest] = useState([
    {
      id: 1,
      name: "Juan Pérez",
      dateOfBirth: "1990-05-15",
      gender: "Masculino",
      rfc: "PERJ900515ABC",
      address: "Calle 123, Colonia Centro",
      city: "Veracruz",
      phoneNumber: "5551234567",
      email: "juan.perez@example.com",
    },
    {
      id: 2,
      name: "María González",
      dateOfBirth: "1985-09-25",
      gender: "Femenino",
      rfc: "GONM850925XYZ",
      address: "Avenida 456, Colonia Roma",
      city: "Puebla",
      phoneNumber: "5559876543",
      email: "maria.gonzalez@example.com",
    },
    {
      id: 3,
      name: "Carlos Ramírez",
      dateOfBirth: "1988-12-10",
      gender: "Masculino",
      rfc: "RAMC881210PQR",
      address: "Calle 789, Colonia Condesa",
      city: "México",
      phoneNumber: "5551112233",
      email: "carlos.ramirez@example.com",
    },
    {
      id: 4,
      name: "Ana Torres",
      dateOfBirth: "1995-04-03",
      gender: "Femenino",
      rfc: "TOAA950403LMN",
      address: "Avenida 987, Colonia Polanco",
      city: "Veracruz",
      phoneNumber: "5554445566",
      email: "ana.torres@example.com",
    },
  ]);

  useEffect(() => {
    getAllPatientDataFunction(setGetAllPatientsData);
  }, []);

  const [dataUserPatient, setDataUserPatient] = useState({});

  const [getDataFromTable, setGetDataFromTable] = useState({});

  const [actionButtonModal, setActionButtonModal] = useState("Agregar");

  const [textAlert, setTextAlert] = useState("");

  const [patientId, setPatientId] = useState("");

  const [showModal, setShowModal] = useState(false);

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
        createPatientFunction,
        deletePatientFunction,
        getAllPatientDataFunction,
        updatePatientFunction,
        getAllPatientsData,
        setGetAllPatientsData,
        patientId,
        setPatientId,
        dataTest,
        setDataTest
      }}
    >
      {props.children}
    </GetTheAppContext.Provider>
  );
};
