import { useContext } from "react";
import { TableMedicalPrescriptions } from "./TableMedicalPrescriptions";
import { GetTheAppContext } from "../../Context/AppContext";

export const MedicalPrescriptions = () => {
  const { allPrescriptionsData } = useContext(GetTheAppContext);
  return (
    <>
      <TableMedicalPrescriptions dataTable={allPrescriptionsData || []} />
    </>
  );
};
