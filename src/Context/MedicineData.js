import axios from "axios";

const MedicineURL = "http://localhost:8081/iwaid/medicines/";

export const getAllMedicineDataFunction = async (setGetAllMedicine) => {
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
      console.log(response.data);
      setGetAllMedicine(response.data);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  }
};

export const createMedicineFunction = async (arrayData) => {
  // try {
  //   const response = await axios.post(MedicineURL, arrayData);
  //   console.log(response.data);
  console.log(arrayData);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error al enviar la solicitud:", error);
  //   return error;
  // }
};

export const updateMedicineFunction = async (arrayData, idMedicine) => {
  console.log(arrayData);
  console.log(idMedicine);
  // const urlUpdate = `${MedicineURL}${idMedicine}`;
  // try {
  //   console.log(urlUpdate);
  //   const response = await axios.patch(urlUpdate, arrayData);
  //   console.log(response.data);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error al enviar la solicitud:", error);
  //   return error;
  // }
};

export const deleteMedicineFunction = async (idMedicine) => {
  console.log(idMedicine);
  // try {
  //   const urlDelete = `${MedicineURL}${idMedicine}`;
  //   console.log(urlDelete);
  //   const response = await axios.delete(urlDelete);
  //   console.log(response.data);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error al enviar la solicitud:", error);
  //   return error;
  // }
};
