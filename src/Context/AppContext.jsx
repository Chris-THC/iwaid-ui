import { createContext, useState } from "react";
import axios from "axios";

export const GetTheAppContext = createContext();

export const AppContext = (props) => {
  const [prueba, setPrueba] = useState([]);

  const getAllData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/iwaid/doctors/", {
        params: {
          name: null,
          specialty: null,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
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

  const [dataTestDoctor, setDataTestDoctor] = useState([
    {
      id: 1,
      name: "Juan",
      specialization: "Pediatría",
      phoneNumber: "1",
      address: "av1 y calle 1",
      email: "juan@example.com",
    },
    {
      id: 2,
      name: "María",
      specialization: "General",
      phoneNumber: "1",
      address: "av1 y calle 1",
      email: "maria@example.com",
    },
    {
      id: 3,
      name: "Pedro",
      specialization: "Urologia",
      phoneNumber: "1",
      address: "av1 y calle 1",
      email: "pedro@example.com",
    },
    {
      id: 4,
      name: "María",
      specialization: "Ginecologia",
      phoneNumber: "2",
      address: "av2 y calle 2",
      email: "maria@example.com",
    },
    {
      id: 5,
      name: "Carlos",
      specialization: "Pediatría",
      phoneNumber: "3",
      address: "av3 y calle 3",
      email: "carlos@example.com",
    },
    {
      id: 6,
      name: "Ana",
      specialization: "Neurologia",
      phoneNumber: "4",
      address: "av4 y calle 4",
      email: "ana@example.com",
    },
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
        getAllData,
        mandarData,
      }}
    >
      {props.children}
    </GetTheAppContext.Provider>
  );
};
