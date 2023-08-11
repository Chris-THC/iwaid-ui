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

  const inputChange = (input) => {
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

  const patientSelection = (selectedPatients) => {
    setSelectedPatient(selectedPatients);
    if (selectedPatients.length > 0) {
      setPatientHistoryId(selectedPatients[0].id);
    }
  };

  const valueTypeHeadPatient = () => {
    const patientName = dataMedicalHistory?.patient?.name || "";
    return Object.keys(dataMedicalHistory).length !== 0 ? patientName : "";
  };

  return (
    <div>
      <Typeahead
        labelKey="name"
        minLength={3}
        defaultInputValue={valueTypeHeadPatient()}
        onChange={patientSelection}
        options={patient}
        selected={selectedPatient}
        onInputChange={inputChange}
        placeholder="Paciente..."
      />

      {patientNotFound && <p className="text-danger">El paciente no existe</p>}
    </div>
  );
};
