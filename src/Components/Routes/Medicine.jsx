import React, { useContext } from "react";
import MedicineList from "../Medicine/MedicineList";
import { FloatingAlert } from "../../Alert/FloatingAlert";
import { GetTheAppContext } from "../../Context/AppContext";
export const Medicine = () => {
  const { showFloatingAlert, handleCloseFloatAlert, textAlert } =
    useContext(GetTheAppContext);
  return (
    <div className="paddingButtonConteinerPrincipal">
      <MedicineList />
      <FloatingAlert
        show={showFloatingAlert}
        message={`¡${textAlert}!`}
        onClose={handleCloseFloatAlert}
      />
    </div>
  );
};
