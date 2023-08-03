import { useState, useEffect, useContext } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { GetTheAppContext } from "../../../Context/AppContext";

export const TypeaheadPatient = ({ infoPatients, patientUpdate }) => {
  const { setPrescriptionPatientId } = useContext(GetTheAppContext);

  const [selectedPatient, setSelectedPatient] = useState([]);
  const [patient, setPatient] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    //   Todo: This sectio is when api is ready
  }, []);

  return (
    <div>
      <Typeahead
        id="pacientes-autocompletado"
        labelKey="name"
        minLength={3}
        onChange={setSelectedPatient}
        options={patient}
        selected={selectedPatient}
        defaultInputValue={patientUpdate || ""}
        onInputChange={(input) => {
          setQuery(input);

          if (query.length >= 3) {
            const filteredPacientes = infoPatients.filter((itemPaciente) =>
              itemPaciente.name.toLowerCase().includes(query.toLowerCase())
            );
            setPatient(filteredPacientes);
          } else {
            setPatient([]);
          }
        }}
        placeholder="Paciente..."
      />

      {selectedPatient.length > 0 &&
        setPrescriptionPatientId(selectedPatient[0].id)}
    </div>
  );
};
