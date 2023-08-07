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
      specificFamilyMedicalHistory: "Hola",
      pathologicalHistory: false,
      specificPathologicalHistory: "",
      nonPathologicalHistory: true,
      specificNonPathologicalHistory: "Hola",
    },
    {
      id: 3,
      patientsId: 1,
      patient: {
        id: 1,
        name: "Damian Reyes Flores",
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
      specificFamilyMedicalHistory: "Hola",
      pathologicalHistory: false,
      specificPathologicalHistory: "",
      nonPathologicalHistory: true,
      specificNonPathologicalHistory: "Hola",
    },
    {
      id: 4,
      patientsId: 1,
      patient: {
        id: 1,
        name: "Luis Hernandez Dìaz",
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
      familyMedicalHistory: false,
      specificFamilyMedicalHistory: "Hola",
      pathologicalHistory: false,
      specificPathologicalHistory: "",
      nonPathologicalHistory: true,
      specificNonPathologicalHistory: "Hola",
    },
  ]);

  return (
    <div>
      <Table dataTable={dataTest || []} />
    </div>
  );
};
