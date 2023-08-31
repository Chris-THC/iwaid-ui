import axios from "axios";
import { URL_API_BACKEND } from "../config/config.js";
const prescriptions_URL = `${URL_API_BACKEND}/prescription/`;

const handleRequest = async (urlClient, methodClient, dataClient = null) => {
  try {
    const response = await axios({
      method: `${methodClient}`,
      url: `${urlClient}`,
      data: dataClient,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const allPrescriptionsFromApiFunction = async (
  setAllPrescriptionsData
) => {
  const response = await handleRequest(prescriptions_URL, "get");
  await setAllPrescriptionsData(response.data);
  return response;
};

export const createPrescriptionFunction = async (arrayData) => {
  const response = await handleRequest(prescriptions_URL, "post", arrayData);
  return response;
};

export const deletePrescriptionFunction = async (prescriptionId) => {
  const urlDelete = `${prescriptions_URL}${prescriptionId}`;
  const response = await handleRequest(urlDelete, "delete");
  return response;
};

export const updatePrescriptionFunction = async (arrayData, prescriptionId) => {
  const urlUpdate = `${prescriptions_URL}${prescriptionId}`;
  const response = await handleRequest(urlUpdate, "patch", arrayData);
  return response;
};
