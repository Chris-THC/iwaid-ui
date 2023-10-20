import axios from "axios";
import { URL_API_BACKEND } from "../config/config.js";

const doctorURL = `${URL_API_BACKEND}/doctors/`;

export const getAllDoctorsDataFunction = async (setGetAllDoctors) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJJRCBQYXRpZW50OiAiOjAsIklEIERvY3RvcjogIjoxLCJSb2xlOiAiOiJEb2N0b3IiLCJpYXQiOjE2OTc4MjIzNTAsImV4cCI6MTY5NzgyMzc5MH0.fc__AlUjL5l1aBDkEUKMZt0s9ZTkpCdIN3X4DIffFR0";
  try {
    const dataGetAll = {
      name: null,
      specialty: null,
    };

    const response = await axios.get(doctorURL, {
      params: dataGetAll,
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
      },
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
