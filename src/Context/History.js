import axios from "axios";
import { URL_API_BACKEND } from "../config/config.js";
const histiry_URL = `${URL_API_BACKEND}/medicalhistory/`;

const handleRequest = async (
  urlClient,
  methodClient,
  dataClient = null,
  token = ""
) => {
  try {
    const response = await axios({
      method: `${methodClient}`,
      url: `${urlClient}`,
      data: dataClient,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const allHistoryFromApiFunction = async (
  setAllMedicalHistoryData,
  token
) => {
  try {
    const response = await axios.get(histiry_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    await setAllMedicalHistoryData(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createHistoryFunction = async (arrayData, token) => {
  const response = await handleRequest(histiry_URL, "post", arrayData, token);
  return response;
};

export const deleteHistoryFunction = async (historyId, token) => {
  try {
    const urlDelete = `${histiry_URL}${historyId}`;
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

export const updateHistoryFunction = async (arrayData, historyId, token) => {
  const urlUpdate = `${histiry_URL}${historyId}`;
  const response = await handleRequest(urlUpdate, "patch", arrayData, token);
  return response;
};
