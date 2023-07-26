import { createContext, useState } from "react";

export const GetTheAppContext = createContext();

export const AppContext = (props) => {
  // TODO: This data will be deleted when the frontend connects to the backend.
  

  const [dataTestMedicine, setDataTestMedicine] = useState([
    { name: "Paracetamol", dosis: 500, presentation: 'Tabletas', description: "Alivia el dolor y reduce la fiebre" },
    { name: "Omeprazol", dosis: 20, presentation: 'Cápsulas', description: "Trata la acidez estomacal y úlceras" },
    { name: "Loratadina", dosis: 10, presentation: 'Tabletas', description: "Antihistamínico para alergias" },
    { name: "Amoxicilina", dosis: 250, presentation: 'Suspensión oral', description: "Antibiótico para infecciones bacterianas" },
    { name: "Cetirizina", dosis: 5, presentation: 'Jarabe', description: "Alivia síntomas de alergias como la picazón y la congestión nasal" },
    { name: "Aspirina", dosis: 100, presentation: 'Comprimidos', description: "Antiinflamatorio y analgésico" },
    { name: "Vitamina C", dosis: 1000, presentation: 'Tabletas efervescentes', description: "Refuerza el sistema inmunológico" },
    { name: "Itraconazol", dosis: 100, presentation: 'Cápsulas', description: "Tratamiento antifúngico para infecciones por hongos" },
    { name: "Diazepam", dosis: 5, presentation: 'Tabletas', description: "Ansiolítico y relajante muscular" },
    { name: "Salbutamol", dosis: 2, presentation: 'Inhalador', description: "Broncodilatador para problemas respiratorios" }
   
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
