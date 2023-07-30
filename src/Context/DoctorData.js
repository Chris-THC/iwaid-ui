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
    console.log(response.data);
    setGetAllDoctors(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};

export const createDoctorFunction = async (arrayData) => {
  try {
    const response = await axios.post(doctorURL, arrayData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const updateDoctorFunction = async (arrayData, idDoctor) => {
  console.log(arrayData);
  console.log(idDoctor);
  try {
    const urlUpdate = `${doctorURL}${idDoctor}`;
    console.log(urlUpdate);
    const response = await axios.patch(urlUpdate, arrayData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const deleteDoctorFunction = async (idDoctor) => {
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
