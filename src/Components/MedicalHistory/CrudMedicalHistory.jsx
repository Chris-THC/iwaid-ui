import { useContext } from "react";
// import { Table } from "./Table";
import { TableMedicalHistory } from "./TableMedicalHistory";
import { GetTheAppContext } from "../../Context/AppContext";
export const CrudMedicalHistory = () => {
  const { MedicalHistoryData } = useContext(GetTheAppContext);
  return (
    <div>
      <TableMedicalHistory dataTable={MedicalHistoryData || []} />
      {/* <Table dataTable={MedicalHistoryData || []} /> */}
    </div>
  );
};
