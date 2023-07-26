import React, { useContext, useEffect } from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { TablaGeneric } from "./table";
const MedicineList = () => {
 
  const { dataTestMedicine } = useContext(GetTheAppContext);
  
  const headersMedicine = ["Nombre", "Dosis", "Presentación", "Descripción"]; 

  // return <TablaDoctores doctors={Doctors} he />; 
   return <TablaGeneric  title='MEDICAMENTOS' data={dataTestMedicine} headers={headersMedicine} />
};

export default MedicineList;
