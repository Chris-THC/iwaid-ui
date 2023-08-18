import React, { useContext } from "react";
import MedicineList from "../../Components/Medicine/MedicineList";
import { FloatingAlert } from "../../Layouts/Alert/FloatingAlert";
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
