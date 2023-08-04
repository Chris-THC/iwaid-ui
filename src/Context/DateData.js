import axios from "axios";

// const doctorURL = "http://localhost:8081/iwaid/doctors/";
// const dateURL = "http://localhost:8081/iwaid/doctors/";

export const getAllDateDataFunction = async(setAllDataDate)=>{

    const res= [
        {
            id:1,
            nameDoctor: "mauricio",
            namePatient: "david",
            date: "03/03/2023",
            time: "8:00 AM",
            notes: "abccc"
        }
    ];

    setAllDataDate(res);
};

export const getNameDoctorsDataFunction = async (setDataDoctorNames) => {
//   try {
//     const dataGetAll = {
//       name:  null, 
//       specialty: null,
//     };

//     const response = await axios.get(doctorURL, {
//       params: dataGetAll,
//     });
//     setDataDoctorNames(response.data);
//   } catch (error) {
//     console.error("Error al enviar la solicitud:", error);
//   }
const res= [
    {
        id:0,
        name: "mauricio",
       
    },
    { id: 1, name: "Juan" },
    { id: 2, name: "María" },
    { id: 3, name: "Pedro" },
    { id: 4, name: "Juan" },
    { id: 5, name: "Ana" }
];
setDataDoctorNames(res);
console.log(setDataDoctorNames);

};

export const getNamePatientDataFunction = async (setDataPatientNames) => {

    // try {
    //     const response = await axios.get(patientURL);
    //     setDataPatientNames(response.data);
    //   } catch (error) {
    //     console.error("Error al enviar la solicitud:", error);
    //   }
  const res=[  {
        id:0,
        name: "david",
       
    }]
    setDataPatientNames(res);
}


export const createDateFunctio= async()=>{

}

export const updateDateFunction =async()=>{
    
}