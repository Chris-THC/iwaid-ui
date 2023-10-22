import React, { useContext, useEffect } from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { TableMedicine } from "./TableMedicine";

const MedicineList = () => {
  const {
    dataGetAllMedicine,
    getAllMedicineDataFunction,
    setAllDataMedicine,
    token,
  } = useContext(GetTheAppContext);

  useEffect(() => {
    getAllMedicineDataFunction(setAllDataMedicine, token);
  }, []);

  return (
    <>
      <TableMedicine dataTable={dataGetAllMedicine || []} />
    </>
  );
};

export default MedicineList;
