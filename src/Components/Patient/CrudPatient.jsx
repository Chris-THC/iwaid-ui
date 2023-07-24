import { useContext } from "react";
import { TablePatient } from "./TablePatient";
import { GetTheAppContext } from "../../Context/AppContext";

export const CrudPatient = () => {
  const { dataTest } = useContext(GetTheAppContext);
  return (
    <div>
      <TablePatient dataTable={dataTest} />
    </div>
  );
};