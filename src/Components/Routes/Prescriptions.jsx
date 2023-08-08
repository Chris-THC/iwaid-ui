import React, { useContext } from "react";
import { MedicalPrescriptions } from "../MedicalPrescriptions/MedicalPrescriptions";
import { FloatingAlert } from "../MedicalPrescriptions/FloatingAlert";
import { GetTheAppContext } from "../../Context/AppContext";

export const Prescriptions = () => {
  const { showFloatingAlert, handleCloseFloatAlert, textAlert } =
    useContext(GetTheAppContext);

  return (
    <div>
      <MedicalPrescriptions />
      <FloatingAlert
        show={showFloatingAlert}
        message={`¡${textAlert}!`}
        onClose={handleCloseFloatAlert}
      />
    </div>
  );
};
