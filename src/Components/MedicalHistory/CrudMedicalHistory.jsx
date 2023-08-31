import { useContext } from "react";
import { TableMedicalHistory } from "./TableMedicalHistory";
import { GetTheAppContext } from "../../Context/AppContext";
export const CrudMedicalHistory = () => {
  const { MedicalHistoryData } = useContext(GetTheAppContext);
  return (
    <div>
      <TableMedicalHistory dataTable={MedicalHistoryData || []} />
    </div>
  );
};
