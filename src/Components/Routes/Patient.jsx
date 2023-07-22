import React, { useContext } from "react";
import { CrudPatient } from "../Patient/CrudPatient";
import { FloatingAlert } from "../Patient/FloatingAlert";
import { GetTheAppContext } from "../../Context/AppContext";

export const Patient = () => {
  const { showFloatingAlert, handleCloseFloatAlert, textAlert } =
    useContext(GetTheAppContext);
  // TODO: The implementation will be worked on the following ticket IWAID-10
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
