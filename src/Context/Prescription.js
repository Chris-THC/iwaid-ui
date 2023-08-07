import axios from "axios";
const prescriptions_URL = "http://localhost:8081/iwaid/prescription";

export const allPrescriptionsFromApiFunction = async (
  setAllPrescriptionsData
) => {
  try {
    const response = await axios.get(prescriptions_URL);
    setAllPrescriptionsData(response.data);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const createPrescriptionFunction = async (arrayData) => {
  try {
    const response = await axios.post(prescriptions_URL, arrayData);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const deletePrescriptionFunction = async (prescriptionId) => {
  try {
    const urlDelete = `${prescriptions_URL}/${prescriptionId}`;
    const response = await axios.delete(urlDelete);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const updatePrescriptionFunction = async (arrayData, prescriptionId) => {
  const urlUpdate = `${prescriptions_URL}/${prescriptionId}`;
  try {
    const response = await axios.patch(urlUpdate, arrayData);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};
