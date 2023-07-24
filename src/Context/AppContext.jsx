import { createContext, useState } from "react";

export const GetTheAppContext = createContext();

export const AppContext = (props) => {


  // TODO: This data will be deleted when the frontend connects to the backend.
  const [dataTest, setDataTest] = useState([
    {
      nombre: "Juan Pérez",
      fechaNacimiento: "1990-05-15",
      genero: "Masculino",
      rfc: "PERJ900515ABC",
      direccion: "Calle 123, Colonia Centro",
      ciudad: "Ciudad de México",
      telefono: "5551234567",
      correo: "juan.perez@example.com",
    },
    {
      nombre: "María Gómez",
      fechaNacimiento: "1985-08-10",
      genero: "Femenino",
      rfc: "GOMM850810XYZ",
      direccion: "Avenida 456, Colonia Juárez",
      ciudad: "Guadalajara",
      telefono: "3339876543",
      correo: "maria.gomez@example.com",
    },
    {
      nombre: "Carlos Ramírez",
      fechaNacimiento: "1982-12-03",
      genero: "Masculino",
      rfc: "RAMC821203LMN",
      direccion: "Calle Principal, Colonia Norte",
      ciudad: "Monterrey",
      telefono: "8185557890",
      correo: "carlos.ramirez@example.com",
    },
  ]);

  const [dataUserPatient, setDataUserPatient] = useState({});

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
        dataUserPatient,
        setDataUserPatient,
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
