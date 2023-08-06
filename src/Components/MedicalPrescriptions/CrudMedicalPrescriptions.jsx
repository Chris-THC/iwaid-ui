import { useContext } from "react";
import { TableMedicalPrescriptions } from "./TableMedicalPrescriptions";
import { GetTheAppContext } from "../../Context/AppContext";

export const CrudMedicalPrescriptions = () => {
  const { allPrescriptionsData } = useContext(GetTheAppContext);
  return (
    <div>
      <TableMedicalPrescriptions dataTable={allPrescriptionsData || []} />
    </div>
  );
};
