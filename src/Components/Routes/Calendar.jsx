import React, {useContext} from "react";
import DateList from "../Date/DateList";
import { GetTheAppContext } from "../../Context/AppContext";
import { FloatingAlert } from "../../Alert/FloatingAlert";

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
  