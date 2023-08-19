import React, { useContext } from "react";
import DoctorList from "../Doctor/DoctorList";
import { FloatingAlert } from "../../Alert/FloatingAlert";
import { GetTheAppContext } from "../../Context/AppContext";

export const Doctor = () => {
  const { showFloatingAlert, textAlert, handleCloseFloatAlert } =
    useContext(GetTheAppContext);
  return (
    <div>
      <DoctorList />
      <FloatingAlert
        show={showFloatingAlert}
        message={`¡${textAlert}!`}
        onClose={handleCloseFloatAlert}
      />
    </div>
  );
};
