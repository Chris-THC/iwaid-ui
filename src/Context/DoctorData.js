import axios from "axios";

// const doctorURL = "http://192.168.1.79:8081/iwaid/doctors/";
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
    return error;
  }
};

export const createDoctorFunction = async (arrayData) => {
  try {
    const response = await axios.post(doctorURL, arrayData);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateDoctorFunction = async (arrayData, idDoctor) => {
  const urlUpdate = `${doctorURL}${idDoctor}`;
  try {
    const response = await axios.patch(urlUpdate, arrayData);
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteDoctorFunction = async (idDoctor) => {
  try {
    const urlDelete = `${doctorURL}${idDoctor}`;
    const response = await axios.delete(urlDelete);
    return response;
  } catch (error) {
    return error;
  }
};
