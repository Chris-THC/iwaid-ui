import React, { useContext, useEffect } from "react";
import DoctorContext from "../../Context/contextDoctor/user/DoctorContext";
import { TablaGeneric } from "./table";
const DoctorList = () => {
 
  const {Doctors, getDoctors}= useContext(DoctorContext)
  useEffect(() => {
    getDoctors();
  }, []);
 
  
  const headersDoctores = ["Nombre", "Especialidad", "Teléfono", "Dirección","Correo"]; 

  // return <TablaDoctores doctors={Doctors} he />; 
   return <TablaGeneric  title='MEDICOS' data={Doctors} headers={headersDoctores} />
};

export default DoctorList;
