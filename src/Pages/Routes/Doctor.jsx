import React, { useContext } from "react";
import DoctorList from "../../Components/Doctor/DoctorList";
import { FloatingAlert } from "../../Layouts/Alert/FloatingAlert";
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
