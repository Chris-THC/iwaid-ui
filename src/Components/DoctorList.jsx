import React, { useContext, useEffect } from "react";
import DoctorContext from "../context/user/DoctorContext";
import { TablaGenerica } from "./table";
const DoctorList = () => {
 
  const {Doctors, getDoctors}= useContext(DoctorContext)
  useEffect(() => {
    getDoctors();
  }, []);
 
  
  const headersDoctores = ["Nombre", "Especialidad", "Teléfono", "Correo"]; 

  // return <TablaDoctores doctors={Doctors} he />; 
   return <TablaGenerica  title='MEDICOS' data={Doctors} headers={headersDoctores} />
};

export default DoctorList;
