import axios from "axios";
import { URL_API_BACKEND } from "../config/config.js";
const prescriptions_URL = `${URL_API_BACKEND}/prescription/`;

const handleRequest = async (
  urlClient,
  methodClient,
  dataClient = null,
  token = ""
) => {
  try {
    const response = await axios({
      url: `${urlClient}`,
      method: `${methodClient}`,
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

// await setAllPrescriptionsData(response.data);
export const allPrescriptionsFromApiFunction = async (
  setAllPrescriptionsData,
  token
) => {
  try {
    const response = await axios.get(prescriptions_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    await setAllPrescriptionsData(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createPrescriptionFunction = async (arrayData, token) => {
  const response = await handleRequest(
    prescriptions_URL,
    "post",
    arrayData,
    token
  );
  return response;
};

export const deletePrescriptionFunction = async (prescriptionId, token) => {
  try {
    const urlDelete = `${prescriptions_URL}${prescriptionId}`;
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

export const updatePrescriptionFunction = async (
  arrayData,
  prescriptionId,
  token
) => {
  const urlUpdate = `${prescriptions_URL}${prescriptionId}`;
  const response = await handleRequest(urlUpdate, "patch", arrayData, token);
  return response;
};
