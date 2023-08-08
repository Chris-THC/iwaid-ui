import { useState } from "react";
import { Table } from "./Table";

export const CrudMedicalHistory = () => {
  // TODO: This data to test the table and we witing to get it from the API
  const [dataTest, setDataTest] = useState([
    {
      id: 2,
      patientsId: 2,
      patient: {
        id: 2,
        name: "Juan Perez Hernandez",
        dateOfBirth: "2000-05-03",
        gender: "Masculino",
        rfc: "abcd0101acfa1",
        address: "Oriente 9",
        city: "Ixtac",
        phoneNumber: "2712021029",
        email: "alexis@email.com",
      },
      height: 170,
      weight: 95,
      familyMedicalHistory: true,
      specificFamilyMedicalHistory: "Si tiene un historial medico familair",
      pathologicalHistory: false,
      specificPathologicalHistory: "",
      nonPathologicalHistory: true,
      specificNonPathologicalHistory:
        "Si tiene un historial medico no patologico",
    },
  ]);

  return (
    <div>
      <Table dataTable={dataTest || []} />
    </div>
  );
};
