import { useState, useEffect, useContext } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { GetTheAppContext } from "../../../Context/AppContext";

export const TypeaheadDoctor = ({ infoDoctors, doctorUpdate }) => {
  //   const { setPrescriptionPatientId } = useContext(GetTheAppContext);

  const [selectedDoctor, setSelectedDoctor] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    //   Todo: This sectio is when api is ready
  }, []);

  return (
    <div>
      <Typeahead
        id="pacientes-autocompletado"
        labelKey="name"
        defaultInputValue={doctorUpdate || ""}
        minLength={3}
        onChange={setSelectedDoctor}
        options={doctor}
        selected={selectedDoctor}
        onInputChange={(input) => {
          setQuery(input);

          if (query.length >= 3) {
            const filteredDoctor = infoDoctors.filter((itemDoctor) =>
              itemDoctor.name.toLowerCase().includes(query.toLowerCase())
            );
            setDoctor(filteredDoctor);
          } else {
            setDoctor([]);
          }
        }}
        placeholder="Nombre del paciente..."
      />

      {/* {selectedPatient.length > 0 &&
        setPrescriptionPatientId(selectedPatient[0].id)} */}
    </div>
  );
};
