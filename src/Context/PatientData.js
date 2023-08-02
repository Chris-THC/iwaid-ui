import axios from "axios";

const doctorURL = "http://localhost:8081/iwaid/patients/";

export const getAllPatientDataFunction = async (setGetAllPatients) => {
  try {
    const response = await axios.get(doctorURL);
    setGetAllPatients(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};


export const createPatientFunction = async (arrayData) => {
  try {
    const response = await axios.post(doctorURL, arrayData);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const updatePatientFunction = async (arrayData, idDoctor) => {
  const urlUpdate = `${doctorURL}${idDoctor}`;
  try {
    console.log(urlUpdate);
    const response = await axios.patch(urlUpdate, arrayData);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const deletePatientFunction = async (idDoctor) => {
  console.log(idDoctor);
  try {
    const urlDelete = `${doctorURL}${idDoctor}`;
    const response = await axios.delete(urlDelete);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};
