import { createContext, useState } from "react";

// Todo: Here I create the context that will be used throughout the web app.
export const GetTheAppContext = createContext();

export const AppContext = (props) => {
  //%  -----------------------Data from Form---------------------------

  const [dataUserPatient, setDataUserPatient] = useState({});

  //%  -----------------------This section is for the state of the Modal---------------------------
  const [showModal, setShowModal] = useState(false);

  //> This show the modal when the button is clicked

  const handleShowModal = () => {
    setShowModal(true);
  };

  //> this close the modal when the button is clicked
  const handleCloseModal = () => {
    setShowModal(false);
  };
  //%  -------------------------This section is for the state of the Modal-------------------------

  return (
    <GetTheAppContext.Provider
      value={{ handleCloseModal, handleShowModal, showModal, dataUserPatient, setDataUserPatient }}
    >
      {props.children}
    </GetTheAppContext.Provider>
  );
};
