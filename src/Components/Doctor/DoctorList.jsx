import React, { useContext} from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { TablaGeneric } from "./table";
const DoctorList = () => {
 
  const { dataTestDoctor } = useContext(GetTheAppContext);
  
   


   return <TablaGeneric  title='MÉDICOS' data={dataTestDoctor}  />
};

export default DoctorList;
