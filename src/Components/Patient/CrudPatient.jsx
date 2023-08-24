import { useContext } from "react";
import { NewTable } from "./NewTable";
import { GetTheAppContext } from "../../Context/AppContext";

export const CrudPatient = () => {
  const { getAllPatientsData } = useContext(GetTheAppContext);
  return (
    <div style={{ height: "100vh" }}>
      <NewTable dataTable={getAllPatientsData || []} />
    </div>
  );
};
