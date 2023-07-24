import React from "react";
import DoctorList from "../componentsDoctor/DoctorList";
import DoctorState from "../../Context/contextDoctor/user/DoctorState";

export const Doctor = () => {
  // TODO: The implementation will be worked on the following ticket IWAID-14
  return (
    <div>
       <DoctorState>
          <DoctorList/> 
      </DoctorState>
    </div>
  );
};
