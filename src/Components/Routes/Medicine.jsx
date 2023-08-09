import React, { useContext } from "react";
import MedicineList from "../Medicine/MedicineList";
import { FloatingAlert } from "../Medicine/FloatingAlert";
import { GetTheAppContext } from "../../Context/AppContext";
export const Medicine = () => {
  const { showFloatingAlert, handleCloseFloatAlert, textAlert } =
    useContext(GetTheAppContext);
  return (
    <div>
      <MedicineList />
      <FloatingAlert
        show={showFloatingAlert}
        message={`¡${textAlert}!`}
        onClose={handleCloseFloatAlert}
      />
    </div>
  );
};
