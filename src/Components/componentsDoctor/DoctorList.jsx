import React, { useContext, useEffect } from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { TablaGeneric } from "./table";
const DoctorList = () => {
 
  const { dataTestDoctor } = useContext(GetTheAppContext);
  
  const headersDoctores = ["Nombre", "Especialidad", "Teléfono", "Dirección","Correo"]; 

  // return <TablaDoctores doctors={Doctors} he />; 
   return <TablaGeneric  title='MÉDICOS' data={dataTestDoctor} headers={headersDoctores} />
};

export default DoctorList;
