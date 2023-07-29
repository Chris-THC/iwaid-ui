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
  console.log(arrayData);

  try {
    const response = await axios.post(doctorURL, arrayData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};
