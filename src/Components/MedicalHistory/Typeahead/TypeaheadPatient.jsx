import { useContext, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { GetTheAppContext } from "../../../Context/AppContext";

export const TypeaheadPatient = ({ infoPatients }) => {
  const { setPatientHistoryId, dataMedicalHistory } =
    useContext(GetTheAppContext);

  const [selectedPatient, setSelectedPatient] = useState([]);
  const [patient, setPatient] = useState([]);
  const [patientNotFound, setPatientNotFound] = useState(false);

  const handleInputChange = (input) => {
    if (input.length >= 3) {
      const filteredPatients = infoPatients.filter((itemPatient) =>
        itemPatient.name.toLowerCase().includes(input.toLowerCase())
      );
      setPatient(filteredPatients);
      setPatientNotFound(filteredPatients.length === 0);
    } else {
      setPatient([]);
      setPatientNotFound(false);
    }
  };

  const handlePatientSelection = (selectedPatients) => {
    setSelectedPatient(selectedPatients);
    if (selectedPatients.length > 0) {
      setPatientHistoryId(selectedPatients[0].id);
    }
  };

  const valueTypeHeadPatient = () => {
    if (Object.keys(dataMedicalHistory).length === 0) {
      return "";
    } else if (dataMedicalHistory.patient && dataMedicalHistory.patient.name) {
      return dataMedicalHistory.patient.name;
    } else {
      return "";
    }
  };

  return (
    <div>
      <Typeahead
        id="pacientes-autocompletado"
        labelKey="name"
        minLength={3}
        defaultInputValue={valueTypeHeadPatient()}
        onChange={handlePatientSelection}
        options={patient}
        selected={selectedPatient}
        onInputChange={handleInputChange}
        placeholder="Paciente..."
      />

      {patientNotFound && <p className="text-danger">El paciente no existe</p>}
    </div>
  );
};
