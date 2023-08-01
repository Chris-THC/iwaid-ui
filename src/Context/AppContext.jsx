import { createContext, useState,useEffect } from "react";
import {
  getAllMedicineDataFunction,
  createMedicineFunction,
  updateMedicineFunction,
  deleteMedicineFunction,
} from "./MedicineData.js";
export const GetTheAppContext = createContext();


export const AppContext = (props) => {
  const [dataGetAllMedicine, setGetDataAllMedicine] = useState([]);

  const [dataUserMedicine, setDataUserMedicine] = useState({});

  const [getDataFromTable, setGetDataFromTable] = useState({});

  const [actionButtonModal, setActionButtonModal] = useState("Agregar");

  const [textAlert, setTextAlert] = useState("");

  const [idMedicine, setIdMedicine] = useState("");

  useEffect(() => {
    getAllMedicineDataFunction(setGetDataAllMedicine);
  }, []);

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
        getDataFromTable,
        setGetDataFromTable,
        actionButtonModal,
        setActionButtonModal,
        handleShowFloatAlter,
        handleCloseFloatAlert,
        showFloatingAlert,
        textAlert,
        setTextAlert,
        dataGetAllMedicine,
        setGetDataAllMedicine,
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
