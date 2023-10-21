import React, { useContext, useEffect } from "react";
import { GetTheAppContext } from "../../Context/AppContext";
// import { TablaGeneric } from "./table";
import { MedicalDatesTable } from "./MedicalDatesTable";

const DateList = () => {
  const {
    dataGetAllDate,
    getAllDoctorsDataFunction,
    setGetDataAllDoctors,
    getAllPatientDataFunction,
    setGetAllPatientsData,
    token,
  } = useContext(GetTheAppContext);
  useEffect(() => {
    getAllDoctorsDataFunction(setGetDataAllDoctors, token);
    getAllPatientDataFunction(setGetAllPatientsData, token);
  }, []);

  return <MedicalDatesTable dataTable={dataGetAllDate || []} />;
};

export default DateList;
