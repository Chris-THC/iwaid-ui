import React, { useContext } from "react";
import { CrudPatient } from "../../Components/Patient/CrudPatient";
import { FloatingAlert } from "../../Layouts/Alert/FloatingAlert";
import { GetTheAppContext } from "../../Context/AppContext";

export const Patient = () => {
  const { showFloatingAlert, handleCloseFloatAlert, textAlert } =
    useContext(GetTheAppContext);
  return (
    <div>
      <CrudPatient />
      <FloatingAlert
        show={showFloatingAlert}
        message={`¡${textAlert}!`}
        onClose={handleCloseFloatAlert}
      />
    </div>
  );
};
