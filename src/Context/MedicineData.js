import axios from "axios";

const MedicineURL = "http://localhost:8081/iwaid/medicines/";

export const getAllMedicineDataFunction = async (setAllDataMedicine) => {
  {
    try {
      const dataGetAll = {
        code: null,
        name: null,
        dosageForms: null,
      };

      const response = await axios.get(MedicineURL, {
        params: dataGetAll,
      });
      setAllDataMedicine(response.data);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  }
};

export const createMedicineFunction = async (arrayData) => {
  {
  try {
    const response = await axios.post(MedicineURL, arrayData);
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
}
};

export const updateMedicineFunction = async (arrayData, idMedicine) => {
  {
  const urlUpdate = `${MedicineURL}${idMedicine}`;
  try {
    const response = await axios.patch(urlUpdate, arrayData);
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
}
};

export const deleteMedicineFunction = async (idMedicine) => {
  {
  try {
    const urlDelete = `${MedicineURL}${idMedicine}`;
    const response = await axios.delete(urlDelete);
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
}
};
