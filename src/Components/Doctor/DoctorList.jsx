import React, { useContext } from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { TableDoctor } from "./TableDoctor";

const DoctorList = () => {
  const { dataGetAllDoctors } = useContext(GetTheAppContext);
  return (
    <TableDoctor dataTable={dataGetAllDoctors || []} />
  );
};
export default DoctorList;
