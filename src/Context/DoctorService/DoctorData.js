import axios from "axios";

const doctorURL = "http://localhost:8081/iwaid/doctors/";

export const getAllDoctorsDataFunction = (setGetAllDoctors) => {
  const queryParams = {
    name: null,
    specialty: null,
  };

  return axios.get(doctorURL, {
    params: queryParams,
  })
    .then(response => {
      setGetAllDoctors(response.data);
      return response;
    })
    .catch(error => {
      console.error('Error fetching doctors data:', error);
      throw error;
    });
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
