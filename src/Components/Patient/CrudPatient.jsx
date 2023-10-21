import { useContext, useEffect } from "react";
import { TablePatients } from "./TablePatients";
import { GetTheAppContext } from "../../Context/AppContext";

export const CrudPatient = () => {
  const {
    getAllPatientsData,
    getAllPatientDataFunction,
    token,
    setGetAllPatientsData,
  } = useContext(GetTheAppContext);

  useEffect(() => {
    getAllPatientDataFunction(setGetAllPatientsData, token);
  }, []);

  return (
    <div>
      <TablePatients dataTable={getAllPatientsData || []} />
    </div>
  );
};
