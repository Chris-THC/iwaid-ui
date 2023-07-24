import React, { useReducer, useState } from 'react';
import DoctorReducer from './DoctorReducer';
import DoctorContext from './DoctorContext';

const DoctorState= (props)=>{

    const initialState = {
    Doctors: [],
    selectedDoctor: null
    };
    
    const [state, dispatch] = useReducer(DoctorReducer, initialState)

    const getDoctors = () => {
        const res = [
          { id: 1, name: "Juan", specialization: 25, phone_number: 1, addres: 'av1 y calle 1', email: "juan@example.com" },
          { id: 2, name: "María", specialization: 30, phone_number: 1, addres: 'av1 y calle 1', email: "maria@example.com" },
          { id: 3, name: "Pedro", specialization: 28, phone_number: 1, addres: 'av1 y calle 1', email: "pedro@example.com" },
        ];
      
        dispatch({
          type: 'GET_DOCTORS', // Utiliza el tipo definido en DoctorReducer.js
          payload: res,
        });
      };

    const getDoctor = (id)=>{
        /* conexion API*/

        dispatch({
            type: 'GET_DOCTOR',
            // payload: res
        })

    }

    return(
        <DoctorContext.Provider value={{
            Doctors: state.Doctors, 
            selectedDoctor: state.selectedDoctor,
            getDoctors,
            getDoctor
        }}>
            {props.children}
        </DoctorContext.Provider>
    );
};

export default DoctorState;