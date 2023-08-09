import React, { useContext,} from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { TablaGeneric } from "./table";

const MedicineList = () => {
 
  const { dataGetAllMedicine } = useContext(GetTheAppContext);
  
   return <TablaGeneric title="MEDICAMENTOS" data={dataGetAllMedicine || []} />;
};

export default MedicineList;
