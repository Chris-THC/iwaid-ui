import { createContext, useState } from "react";

export const GetTheAppContext = createContext();

export const AppContext = (props) => {
  const [dataTest, setDataTest] = useState([
    {
      nombrePaciente: "Juan Pérez",
      medico: "Dr. Ana García",
      fecha: "2023-07-23",
      medicamentos:
        "Paracetamol (500mg) - Cada 8 horas (Para el dolor), Amoxicilina (875mg) - Cada 12 horas (Para la infección)",
    },
    {
      nombrePaciente: "María López",
      medico: "Dr. Luis Ramírez",
      fecha: "2023-07-22",
      medicamentos: "Ibuprofeno (400mg) - Cada 6 horas (Para la inflamación)",
    },
    {
      nombrePaciente: "Carlos Gómez",
      medico: "Dra. Laura Martínez",
      fecha: "2023-07-21",
      medicamentos:
        "Loratadina (10mg) - Cada 24 horas (Para las alergias), Dexametasona (2mg) - Cada 12 horas (Para la inflamación aguda)",
    },
    {
      nombrePaciente: "Ana Castro",
      medico: "Dr. Roberto Fernández",
      fecha: "2023-07-20",
      medicamentos:
        "Omeprazol (20mg) - Cada 24 horas (Para la acidez estomacal)",
    },
  ]);

  const [dataMedicalPrescription, setDataMedicalPrescription] = useState({});

  const [getDataFromTable, setGetDataFromTable] = useState({});

  const [actionButtonModal, setActionButtonModal] = useState("Agregar");

  const [textAlert, setTextAlert] = useState("");

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
        dataMedicalPrescription,
        setDataMedicalPrescription,
        dataTest,
        setDataTest,
        getDataFromTable,
        setGetDataFromTable,
        actionButtonModal,
        setActionButtonModal,
        handleShowFloatAlter,
        handleCloseFloatAlert,
        showFloatingAlert,
        textAlert,
        setTextAlert,
      }}
    >
      {props.children}
    </GetTheAppContext.Provider>
  );
};
