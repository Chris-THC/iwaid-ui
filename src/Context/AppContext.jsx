import { createContext, useState } from "react";

export const GetTheAppContext = createContext();

export const AppContext = (props) => {
  const [dataUserPatient, setDataUserPatient] = useState({});

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <GetTheAppContext.Provider
      value={{
        handleCloseModal,
        handleShowModal,
        showModal,
        dataUserPatient,
        setDataUserPatient,
      }}
    >
      {props.children}
    </GetTheAppContext.Provider>
  );
};
