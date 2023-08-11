import React, { useContext,} from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { TablaGeneric } from "./table";

const DateList = () => {
 
  const { dataGetAllDate } = useContext(GetTheAppContext);
  
   return <TablaGeneric title="CITAS MÉDICAS" data={dataGetAllDate || []} />;
};

export default DateList;
