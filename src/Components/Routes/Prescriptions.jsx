import React, { useContext } from "react";
import { MedicalPrescriptions } from "../MedicalPrescriptions/MedicalPrescriptions";
import { FloatingAlert } from "../../Alert/FloatingAlert";
import { GetTheAppContext } from "../../Context/AppContext";

export const Prescriptions = () => {
  const { showFloatingAlert, handleCloseFloatAlert, textAlert } =
    useContext(GetTheAppContext);

  return (
    <div className="paddingButtonConteinerPrincipal">
      <MedicalPrescriptions />
      <FloatingAlert
        show={showFloatingAlert}
        message={`¡${textAlert}!`}
        onClose={handleCloseFloatAlert}
      />
    </div>
  );
};
