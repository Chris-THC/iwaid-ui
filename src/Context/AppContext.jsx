import { createContext, useState } from "react";
import axios from "axios";

export const GetTheAppContext = createContext();

export const AppContext = (props) => {
  const [prueba, setPrueba] = useState([]);
  const [dataTestDoctor, setDataTestDoctor] = useState([]);

  const getAllData = async () => {
    const params = {
    name: null,
    specialty: null,
  };
  
  const URL = "http://localhost:8081/iwaid/doctors/";

  try {
    const response = await axios.get(URL, {
      params: params,
    });
    console.log("Respuesta del servidor:", response.data);
    setDataTestDoctor(response.data);
    // Si hay alguna lógica adicional que deseas realizar con la respuesta, aquí es el lugar para hacerlo.
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
  };

  async function mandarData() {
    const url = "http://localhost:8081/iwaid/doctors/";
    const data = {
      name: "Ricardo Rivera",
      specialty: "Pediatria",
      address: "Zimpizahua #19",
      phoneNumber: "8384578697",
      email: "ricardo09@gmail.com",
    };

    try {
      const response = await axios.post(url, data);
      console.log("Respuesta del servidor:", response.data);
      // Si hay alguna lógica adicional que deseas realizar con la respuesta, aquí es el lugar para hacerlo.
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  }

  // TODO: This data will be deleted when the frontend connects to the backend.



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
        getAllData,
        mandarData,
      }}
    >
      {props.children}
    </GetTheAppContext.Provider>
  );
};
