import { useContext } from "react";
import { TablePatient } from "./TablePatient";
import { GetTheAppContext } from "../../Context/AppContext";

export const CrudPatient = () => {
  const { getAllPatientsData, dataTest } = useContext(GetTheAppContext);
  return (
    <div>
      {/* TODO: This data "dataTest" is for testing purposes, it should be removed when the app is ready. */}
      {/* TODO: "getAllPatientsData" is the variable that contains the data from the API. */}
      <TablePatient dataTable={dataTest || []} />
    </div>
  );
};
