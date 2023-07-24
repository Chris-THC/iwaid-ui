import React, { useContext } from "react";
import { CrudMedicalPrescriptions } from "../MedicalPrescriptions/CrudMedicalPrescriptions";
import { FloatingAlert } from "../MedicalPrescriptions/FloatingAlert";
import { GetTheAppContext } from "../../Context/AppContext";

export const Prescriptions = () => {
  const { showFloatingAlert, handleCloseFloatAlert, textAlert } =
    useContext(GetTheAppContext);
  // TODO: The implementation will be worked on the following ticket IWAID-14
  return (
    <div>
      <CrudMedicalPrescriptions />
      <FloatingAlert
        show={showFloatingAlert}
        message={`¡${textAlert}!`}
        onClose={handleCloseFloatAlert}
      />
    </div>
  );
};
