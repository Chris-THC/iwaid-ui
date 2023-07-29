import React, { useContext } from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { TablaGeneric } from "./table";
const DoctorList = () => {
  const { dataGetAllDoctors } = useContext(GetTheAppContext);

  return <TablaGeneric title="MÉDICOS" data={dataGetAllDoctors || []} />;
};

export default DoctorList;
