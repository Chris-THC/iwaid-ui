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
      specificFamilyMedicalHistory: "Sí tiene un historial médico familiar",
      pathologicalHistory: false,
      specificPathologicalHistory: "",
      nonPathologicalHistory: true,
      specificNonPathologicalHistory:
        "Si tiene un historial medico no patologico",
    },
    {
      id: 3,
      patientsId: 3,
      patient: {
        id: 3,
        name: "Luis Salas Martinez",
        dateOfBirth: "2001-12-03",
        gender: "Masculino",
        rfc: "abcd0101acfa1",
        address: "Oriente 9",
        city: "Ixtac",
        phoneNumber: "2712021029",
        email: "luis@email.com",
      },
      height: 170,
      weight: 95,
      familyMedicalHistory: false,
      specificFamilyMedicalHistory: "",
      pathologicalHistory: true,
      specificPathologicalHistory: "Este es un datos de prueba",
      nonPathologicalHistory: true,
      specificNonPathologicalHistory: "",
    },
  ]);

  return (
    <div>
      <Table dataTable={dataTest || []} />
    </div>
  );
};
