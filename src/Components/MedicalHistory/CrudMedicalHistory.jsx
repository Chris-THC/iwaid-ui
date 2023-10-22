import { useContext, useEffect } from "react";
import { TableMedicalHistory } from "./TableMedicalHistory";
import { GetTheAppContext } from "../../Context/AppContext";
export const CrudMedicalHistory = () => {
  const {
    allHistoryFromApiFunction,
    setAllMedicalHistoryData,
    MedicalHistoryData,
    getAllDoctorsDataFunction,
    setGetDataAllDoctors,
    getAllPatientDataFunction,
    setGetAllPatientsData,
    token,
  } = useContext(GetTheAppContext);
  useEffect(() => {
    allHistoryFromApiFunction(setAllMedicalHistoryData, token);
    getAllDoctorsDataFunction(setGetDataAllDoctors, token);
    getAllPatientDataFunction(setGetAllPatientsData, token);
  }, []);

  return (
    <div>
      <TableMedicalHistory dataTable={MedicalHistoryData || []} />
    </div>
  );
};
