import { useContext, useEffect } from "react";
import { TableMedicalPrescriptions } from "./TableMedicalPrescriptions";
import { GetTheAppContext } from "../../Context/AppContext";

export const MedicalPrescriptions = () => {
  const {
    allPrescriptionsData,
    allPrescriptionsFromApiFunction,
    setAllPrescriptionsData,
    getAllDoctorsDataFunction,
    setGetDataAllDoctors,
    getAllPatientDataFunction,
    setGetAllPatientsData,
    token,
  } = useContext(GetTheAppContext);
  useEffect(() => {
    allPrescriptionsFromApiFunction(setAllPrescriptionsData, token);
    getAllDoctorsDataFunction(setGetDataAllDoctors, token);
    getAllPatientDataFunction(setGetAllPatientsData, token);
  }, []);

  return (
    <>
      <TableMedicalPrescriptions dataTable={allPrescriptionsData || []} />
    </>
  );
};
