import { useState, useEffect, useContext } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { GetTheAppContext } from "../../../Context/AppContext";

export const TypeaheadMedicine = ({ infoMedicine, medicineUpdate }) => {
  //   const { setPrescriptionPatientId } = useContext(GetTheAppContext);
  //   Todo: This code is when api is ready

  const [selectedMedicine, setSelectedMedicine] = useState([]);
  const [medicine, setMedicine] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    //   Todo: This sectio is when api is ready
  }, []);

  return (
    <div>
      <Typeahead
        id="pacientes-autocompletado"
        labelKey="name"
        defaultInputValue={medicineUpdate || ""}
        minLength={3}
        onChange={setSelectedMedicine}
        options={medicine}
        selected={selectedMedicine}
        onInputChange={(input) => {
          setQuery(input);

          if (query.length >= 3) {
            const filteredMedicine = infoMedicine.filter((itemMedicine) =>
              itemMedicine.name.toLowerCase().includes(query.toLowerCase())
            );
            setMedicine(filteredMedicine);
          } else {
            setMedicine([]);
          }
        }}
        placeholder="Medicamento..."
      />

      {/* {selectedPatient.length > 0 &&
        setPrescriptionPatientId(selectedPatient[0].id)} */}
    </div>
  );
};
