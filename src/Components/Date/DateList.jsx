import React, { useContext } from "react";
import { GetTheAppContext } from "../../Context/AppContext";
// import { TablaGeneric } from "./table";
import { MedicalDatesTable } from "./MedicalDatesTable";

const DateList = () => {
  const { dataGetAllDate } = useContext(GetTheAppContext);

  return <MedicalDatesTable dataTable={dataGetAllDate || []} />;
  //  return <TablaGeneric title="CITAS MÉDICAS" data={dataGetAllDate || []} />;
};

export default DateList;
