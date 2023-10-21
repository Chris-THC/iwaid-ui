import React, { useContext, useEffect } from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { TableDoctor } from "./TableDoctor";

const DoctorList = () => {
  const {
    dataGetAllDoctors,
    token,
    getAllDoctorsDataFunction,
    setGetDataAllDoctors,
  } = useContext(GetTheAppContext);

  useEffect(() => {
    getAllDoctorsDataFunction(setGetDataAllDoctors, token);
  }, []);

  return <TableDoctor dataTable={dataGetAllDoctors || []} />;
};
export default DoctorList;
