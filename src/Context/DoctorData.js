import axios from "axios";

const doctorURL = "http://localhost:8081/iwaid/doctors/";

export const getAllDoctorsDataFunction = async (setGetAllDoctors) => {
  try {
    const dataGetAll = {
      name: null,
      specialty: null,
    };

    const response = await axios.get(doctorURL, {
      params: dataGetAll,
    });
    setGetAllDoctors(response.data);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};

export const createDoctorFunction = async (arrayData) => {
  try {
    const response = await axios.post(doctorURL, arrayData);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const updateDoctorFunction = async (arrayData, idDoctor) => {
  const urlUpdate = `${doctorURL}${idDoctor}`;
  try {
    console.log(urlUpdate);
    const response = await axios.patch(urlUpdate, arrayData);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const deleteDoctorFunction = async (idDoctor) => {
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
