import { useContext } from "react";
import { Table } from "./Table";
import { GetTheAppContext } from "../../Context/AppContext";
export const CrudMedicalHistory = () => {
  const { allMedicalHistoryData } = useContext(GetTheAppContext);
  return (
    <div>
      <Table dataTable={allMedicalHistoryData || []} />
    </div>
  );
};
