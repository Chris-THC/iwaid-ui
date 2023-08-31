import { useContext } from "react";
import { TablePatients } from "./TablePatients";
import { GetTheAppContext } from "../../Context/AppContext";

export const CrudPatient = () => {
  const { getAllPatientsData } = useContext(GetTheAppContext);
  return (
    <div>
      <TablePatients dataTable={getAllPatientsData || []} />
    </div>
  );
};
