import axios from "axios";

const doctorURL = "http://localhost:8081/iwaid/patients/";
// TODO: This code cannot be tested yet because the backend is not finished yet.  

export const getAllPatientDataFunction = async (setGetAllPatients) => {
  try {
    const dataGetAll = {
      name: null,
      specialty: null,
    };

    const response = await axios.get(doctorURL, {
      params: dataGetAll,
    });
    setGetAllPatients(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};

export const createPatientFunction = async (arrayData) => {
  try {
    const response = await axios.post(doctorURL, arrayData);
    return response.data;
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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const deletePatientFunction = async (idDoctor) => {
  console.log(idDoctor);
  try {
    const urlDelete = `${doctorURL}${idDoctor}`;
    console.log(urlDelete);
    const response = await axios.delete(urlDelete);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};
