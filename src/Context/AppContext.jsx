import { createContext, useState } from "react";

export const GetTheAppContext = createContext();

export const AppContext = (props) => {
  // TODO: This data will be deleted when the frontend connects to the backend.
  

  const [dataTestMedicine, setDataTestMedicine] = useState([
    // { name: "Paracetamol", dosis: 500, presentation: 'Tabletas', description: "Alivia el dolor y reduce la fiebre" },
    {id:1, name: "Omeprazol", dosis: "20", presentation: "Sólidos", description: "Trata la acidez estomacal y úlceras" },
    { id:2,name: "Loratadina", dosis: "10", presentation: 'Tabletas', description: "Antihistamínico para alergias" },
    {id:4, name: "Amoxicilina", dosis: "250", presentation: 'Suspensión oral', description: "Antibiótico para infecciones bacterianas" },
    { id:5, name: "Cetirizina", dosis: "5", presentation: 'Jarabe', description: "Alivia síntomas de alergias como la picazón y la congestión nasal" },
    
  ]);



  const [dataUserMedicine, setDataUserMedicine] = useState({});

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
        dataUserMedicine,
        setDataUserMedicine,
        dataTestMedicine,
        setDataTestMedicine,
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
