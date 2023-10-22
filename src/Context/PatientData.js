import axios from "axios";
import { URL_API_BACKEND } from "../config/config.js";
const patientURL = `${URL_API_BACKEND}/patients/`;

export const getAllPatientDataFunction = async (
  setGetAllPatients,
  token = ""
) => {
  try {
    const response = await axios.get(patientURL, {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
      },
    });
    setGetAllPatients(response.data);
    return response;
  } catch (error) {
    return error;
  }
};

export const createPatientFunction = async (arrayData, token = "") => {
  try {
    const response = await axios.post(patientURL, arrayData, {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const updatePatientFunction = async (
  arrayData,
  idPatient,
  token = ""
) => {
  const urlUpdate = `${patientURL}${idPatient}`;
  try {
    const response = await axios.patch(urlUpdate, arrayData, {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deletePatientFunction = async (idPatient, token = "") => {
  try {
    const urlDelete = `${patientURL}${idPatient}`;
    const response = await axios.delete(urlDelete, {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
