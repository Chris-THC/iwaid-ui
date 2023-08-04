import axios from "axios";

 const doctorURL = "http://localhost:8081/iwaid/doctors/";
const dateURL = "http://localhost:8081/iwaid/dates/";
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
  
}


export const createDateFunctio= async()=>{

}

export const updateDateFunction =async()=>{
    
}