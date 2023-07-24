import { useContext } from "react";
import { TableMedicalPrescriptions } from "./TableMedicalPrescriptions";
import { GetTheAppContext } from "../../Context/AppContext";

export const CrudMedicalPrescriptions = () => {
  const { dataTest } = useContext(GetTheAppContext);
  return (
    <div>
      <TableMedicalPrescriptions dataTable={dataTest} />
    </div>
  );
};
