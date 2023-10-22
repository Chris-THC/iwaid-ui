import axios from "axios";
import { URL_API_BACKEND } from "../config/config.js";
const MedicineURL = `${URL_API_BACKEND}/medicines/`;

export const getAllMedicineDataFunction = async (
  setAllDataMedicine,
  token = ""
) => {
  try {
    const dataGetAll = {
      code: null,
      name: null,
      dosageForms: null,
    };

    const response = await axios.get(MedicineURL, {
      params: dataGetAll,
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
      },
    });
    setAllDataMedicine(response.data);
  } catch (error) {
    return error;
  }
};

export const createMedicineFunction = async (arrayData, token = "") => {
  try {
    const response = await axios.post(MedicineURL, arrayData, {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const updateMedicineFunction = async (
  arrayData,
  idMedicine,
  token = ""
) => {
  const urlUpdate = `${MedicineURL}${idMedicine}`;
  try {
    const response = await axios.patch(urlUpdate, arrayData, {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteMedicineFunction = async (idMedicine, token = "") => {
  try {
    const urlDelete = `${MedicineURL}${idMedicine}`;
    const response = await axios.delete(urlDelete, {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
