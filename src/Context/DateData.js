import axios from "axios";
import { URL_API_BACKEND } from "../config/config.js";

const appointmentsURL = `${URL_API_BACKEND}/appointments/`;

const handleRequest = async (url, method, data = null, token = "") => {
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

export const getAllDateDataFunction = async (setAllDataDate, token = "") => {
  try {
    const response = await axios.get(appointmentsURL, {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
      },
    });
    setAllDataDate(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};

export const createDateFunction = async (arrayData, token = "") => {
  try {
    const response = await axios.post(appointmentsURL, arrayData, {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const updateDateFunction = async (arrayData, idDate, token = "") => {
  const urlUpdate = `${appointmentsURL}${idDate}`;
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

export const deleteDateFunction = async (idDate, token = "") => {
  try {
    const urlDelete = `${appointmentsURL}${idDate}`;
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
