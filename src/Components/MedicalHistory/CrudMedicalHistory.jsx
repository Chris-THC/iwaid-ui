import { useContext } from "react";
import { Table } from "./Table";
import { GetTheAppContext } from "../../Context/AppContext";
export const CrudMedicalHistory = () => {
  const { MedicalHistoryData } = useContext(GetTheAppContext);
  return (
    <div>
      <Table dataTable={MedicalHistoryData || []} />
    </div>
  );
};
