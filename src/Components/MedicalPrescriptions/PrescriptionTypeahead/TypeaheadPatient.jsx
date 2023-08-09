import { useContext, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { GetTheAppContext } from "../../../Context/AppContext";

export const TypeaheadPatient = ({ infoPatients }) => {
  const { setPrescriptionPatientId, dataPrescription } =
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

  const handlePatientSelection = (selectedPatient) => {
    setSelectedPatient(selectedPatient);
    if (selectedPatient.length > 0) {
      setPrescriptionPatientId(selectedPatient[0].id);
    }
  };

  const getTypeHeadPatientValue = () => {
    if (Object.keys(dataPrescription).length === 0) {
      return "";
    } else if (dataPrescription.patient && dataPrescription.patient.name) {
      return dataPrescription.patient.name;
    }
  };

  return (
    <div>
      <Typeahead
        id="pacientes-autocompletado"
        labelKey="name"
        minLength={3}
        onChange={handlePatientSelection}
        options={patient}
        selected={selectedPatient}
        defaultInputValue={getTypeHeadPatientValue()}
        onInputChange={handleInputChange}
        placeholder="Paciente..."
      />

      {patientNotFound && <p className="text-danger">El paciente no existe</p>}
    </div>
  );
};
