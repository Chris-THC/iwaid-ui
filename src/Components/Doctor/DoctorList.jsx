import React, { useContext } from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { NewTable } from "./NewTable";
// import { TablaGeneric } from "./table";
const DoctorList = () => {
  const { dataGetAllDoctors } = useContext(GetTheAppContext);

  return <NewTable dataTable={dataGetAllDoctors || []} />;
  // return <TablaGeneric title="MÉDICOS" data={dataGetAllDoctors || []} />;
};

export default DoctorList;
