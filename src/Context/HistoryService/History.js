import axios from "axios";
const prescriptions_URL = "http://localhost:8081/iwaid/medicalhistory/";

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

export const allHistoryFromApiFunction = async (setAllMedicalHistoryData) => {
  const response = await handleRequest(prescriptions_URL, "get");
  await setAllMedicalHistoryData(response.data);
  return response;
};

export const createHistoryFunction = async (arrayData) => {
  const response = await handleRequest(prescriptions_URL, "post", arrayData);
  return response;
};

export const deleteHistoryFunction = async (historyId) => {
  const urlDelete = `${prescriptions_URL}${historyId}`;
  const response = await handleRequest(urlDelete, "delete");
  return response;
};

export const updateHistoryFunction = async (arrayData, historyId) => {
  const urlUpdate = `${prescriptions_URL}${historyId}`;
  const response = await handleRequest(urlUpdate, "patch", arrayData);
  return response;
};
