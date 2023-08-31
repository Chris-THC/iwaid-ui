import React, { useContext } from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { TableMedicine } from "./TableMedicine";

const MedicineList = () => {
  const { dataGetAllMedicine } = useContext(GetTheAppContext);

  return (
    <>
      <TableMedicine dataTable={dataGetAllMedicine || []} />
    </>
  );
};

export default MedicineList;
