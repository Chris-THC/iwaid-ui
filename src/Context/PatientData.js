import axios from "axios";
import { URL_API_BACKEND } from "../config/config.js";
const patientURL = `${URL_API_BACKEND}/patients/`;

export const getAllPatientDataFunction = async (setGetAllPatients) => {
  try {
    const response = await axios.get(patientURL);
    setGetAllPatients(response.data);
    return response;
  } catch (error) {
    return error;
  }
};

export const createPatientFunction = async (arrayData) => {
  try {
    const response = await axios.post(patientURL, arrayData);
    return response;
  } catch (error) {
    return error;
  }
};

export const updatePatientFunction = async (arrayData, idPatient) => {
  const urlUpdate = `${patientURL}${idPatient}`;
  try {
    const response = await axios.patch(urlUpdate, arrayData);
    return response;
  } catch (error) {
    return error;
  }
};

export const deletePatientFunction = async (idPatient) => {
  try {
    const urlDelete = `${patientURL}${idPatient}`;
    const response = await axios.delete(urlDelete);
    return response;
  } catch (error) {
    return error;
  }
};
