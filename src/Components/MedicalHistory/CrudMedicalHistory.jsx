import { useState } from "react";
import { Table } from "./Table";

export const CrudMedicalHistory = () => {
  // TODO: This data to test the table and we witing to get it from the API
  const [dataTest, setDataTest] = useState([]);

  return (
    <div>
      <Table dataTable={dataTest || []} />
    </div>
  );
};
