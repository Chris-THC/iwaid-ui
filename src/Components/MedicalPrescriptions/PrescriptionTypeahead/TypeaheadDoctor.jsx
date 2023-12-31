import { useContext, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { GetTheAppContext } from "../../../Context/AppContext";

export const TypeaheadDoctor = ({ infoDoctors }) => {
  const { setPrescriptionDoctorId, dataPrescription, prescriptionDoctorId } =
    useContext(GetTheAppContext);

  const [selectedDoctor, setSelectedDoctor] = useState([]);

  const [doctor, setDoctor] = useState([]);

  const [doctorNotFound, setDoctorNotFound] = useState(false);

  const handleInputChange = (input) => {
    if (input.length >= 3) {
      const filteredDoctor = infoDoctors.filter((itemDoctor) =>
        itemDoctor.name.toLowerCase().includes(input.toLowerCase())
      );
      setDoctor(filteredDoctor);
      setDoctorNotFound(filteredDoctor.length === 0);
    } else {
      setDoctor([]);
      setDoctorNotFound(false);
    }
  };

  const handleDoctorSelection = (selectedDoctor) => {
    setSelectedDoctor(selectedDoctor);
    if (selectedDoctor.length > 0) {
      setPrescriptionDoctorId(selectedDoctor[0].id);
    }
  };

  const getTypeHeadDoctorValue = () => {
    if (Object.keys(dataPrescription).length === 0) {
      return "";
    } else if (dataPrescription.doctor && dataPrescription.doctor.name) {
      setPrescriptionDoctorId(prescriptionDoctorId);
      return dataPrescription.doctor.name;
    }
  };

  return (
    <div>
      <Typeahead
        id="pacientes-autocompletado"
        labelKey="name"
        defaultInputValue={getTypeHeadDoctorValue()}
        minLength={3}
        onChange={handleDoctorSelection}
        options={doctor}
        selected={selectedDoctor}
        onInputChange={handleInputChange}
        placeholder="Nombre del paciente..."
      />
      {doctorNotFound && <p className="text-danger">El doctor no existe</p>}
    </div>
  );
};
