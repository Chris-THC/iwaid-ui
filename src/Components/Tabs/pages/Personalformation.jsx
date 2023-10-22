import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { URL_API_BACKEND } from "../../../config/config";
import { SectionPersonaInfo } from "./components/SectionPersonaInfo";
import { GetTheAppContext } from "../../../Context/AppContext";

export const Personalformation = () => {
  const { user, token } = useContext(GetTheAppContext);
  const [personalInformation, setPersonalInformation] = useState([]);

  // const info = {
  //   sub: "juan@gmail.com",
  //   idPatient: 1,
  //   idDoctor: 0,
  //   role: "Patient",
  //   iat: 1697930313,
  //   exp: 1697931753,
  // };

  const getPersonalInformation = async (id) => {
    try {
      const searchPatientByID = `${URL_API_BACKEND}/patients/${id}`;
      const response = await axios.get(searchPatientByID, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPersonalInformation(response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getPersonalInformation(user.idPatient);
  }, []);

  return (
    <div style={{ backgroundColor: "#f1f1f1" }} className="conteiner">
      <SectionPersonaInfo isGetData={personalInformation || {}} />
    </div>
  );
};
