import React, {useContext} from "react";
import DateList from "../../Components/Date/DateList";
import { GetTheAppContext } from "../../Context/AppContext";
import { FloatingAlert } from "../../Layouts/Alert/FloatingAlert";

export const Calendar = () => {
  const { showFloatingAlert, textAlert, handleCloseFloatAlert } =
    useContext(GetTheAppContext);

  return (
    <div>
      <DateList/>
      <FloatingAlert
        show={showFloatingAlert}
        message={`¡${textAlert}!`}
        onClose={handleCloseFloatAlert}
      />
    </div>
  );
};
  