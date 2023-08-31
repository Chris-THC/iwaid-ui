import axios from "axios";
import { URL_API_BACKEND } from "../config/config.js";

const appointmentsURL = `${URL_API_BACKEND}/appointments/`;

const handleRequest = async (url, method, data = null) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const getAllDateDataFunction = async (setAllDataDate) => {
  try {
    const response = await axios.get(appointmentsURL);
    setAllDataDate(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};

export const createDateFunction = async (arrayData) => {
  return handleRequest(appointmentsURL, "POST", arrayData);
};

export const updateDateFunction = async (arrayData, idDate) => {
  const urlUpdate = `${appointmentsURL}${idDate}`;
  return handleRequest(urlUpdate, "PATCH", arrayData);
};

export const deleteDateFunction = async (idDate) => {
  const urlDelete = `${appointmentsURL}${idDate}`;
  return handleRequest(urlDelete, "DELETE");
};
