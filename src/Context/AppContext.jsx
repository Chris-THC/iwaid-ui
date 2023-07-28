import { createContext, useState } from "react";

export const GetTheAppContext = createContext();

export const AppContext = (props) => {
  // TODO: This data will be deleted when the frontend connects to the backend.
  

  const [dataTestDoctor, setDataTestDoctor] = useState([
    { id:1, name: "Juan", specialization: "Pediatría", phoneNumber: "1", address: 'av1 y calle 1', email: "juan@example.com" },
    { id:2, name: "María", specialization: "30", phoneNumber: "1", address: 'av1 y calle 1', email: "maria@example.com" },
    { id:3, name: "Pedro", specialization: "28", phoneNumber: "1", address: 'av1 y calle 1', email: "pedro@example.com" },
    { id:4, name: "María", specialization: "12", phoneNumber: "2", address: 'av2 y calle 2', email: "maria@example.com" },
    { id:5, name: "Carlos", specialization: "8", phoneNumber: "3", address: 'av3 y calle 3', email: "carlos@example.com" },
    { id:6, name: "Ana", specialization: "15", phoneNumber: "4", address: 'av4 y calle 4', email: "ana@example.com" }
  ]);



  const [dataUserDoctor, setDataUserDoctor] = useState({});

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
        dataUserDoctor,
        setDataUserDoctor,
        dataTestDoctor,
        setDataTestDoctor,
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
