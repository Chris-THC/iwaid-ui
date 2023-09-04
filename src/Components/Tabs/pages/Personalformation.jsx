import { useState, useEffect } from "react";
import axios from "axios";
import { URL_API_BACKEND } from "../../../config/config";
import { SectionPersonaInfo } from "./components/SectionPersonaInfo";

export const Personalformation = () => {
  const [personalInformation, setPersonalInformation] = useState([]);

  const getPersonalInformation = async (id) => {
    try {
      const response = await axios.get(`${URL_API_BACKEND}/patients/${id}`);
      setPersonalInformation(response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getPersonalInformation(1);
  }, []);

  return (
    <div style={{ backgroundColor: "#f1f1f1" }} className="conteiner">
      <SectionPersonaInfo isGetData={personalInformation || {}} />
    </div>
  );
};
