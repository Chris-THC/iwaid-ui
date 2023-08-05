import axios from "axios";

 const doctorURL = "http://localhost:8081/iwaid/doctors/";
const dateURL = "http://localhost:8081/iwaid/appointments/";
const patientURL = "http://localhost:8081/iwaid/patients/";

export const getAllDateDataFunction = async(setAllDataDate)=>{
    try {
        const response = await axios.get(dateURL);
        setAllDataDate(response.data);
      } catch (error) {
        console.error("Error al enviar la solicitud:", error);
      }
    
};

export const getNameDoctorsDataFunction = async (setDataDoctorNames) => {
  try {
    const dataGetAll = {
      name:  null, 
      specialty: null,
    };

    const response = await axios.get(doctorURL, {
      params: dataGetAll,
    });
    setDataDoctorNames(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }

};

export const getNamePatientDataFunction = async (setDataPatientNames) => {

    try {
        const response = await axios.get(patientURL);
        setDataPatientNames(response.data);
      } catch (error) {
        console.error("Error al enviar la solicitud:", error);
      }
  
};


export const createDateFunction = async (arrayData) => {
  try {
    const response = await axios.post(dateURL, arrayData);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const updateDateFunction =async(arrayData, idDate)=>{
  const urlUpdate = `${dateURL}${idDate}`;
  try {
    const response = await axios.patch(urlUpdate, arrayData);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

export const deleteDateFunction = async (idDate) => {
  try {
    const urlDelete = `${dateURL}${idDate}`;
    const response = await axios.delete(urlDelete);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    return error;
  }
};

