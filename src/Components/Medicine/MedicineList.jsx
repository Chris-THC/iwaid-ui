import React, { useContext,} from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { TablaGeneric } from "./table";

const MedicineList = () => {
 
  const { dataTestMedicine } = useContext(GetTheAppContext);
  
   return <TablaGeneric  title='MEDICAMENTOS' data={dataTestMedicine}  />
};

export default MedicineList;
