import React from "react";

import ReactDOM from 'react-dom';
import DoctorList from "./Components/DoctorList";
import DoctorState from "./context/user/DoctorState";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

 

  return (
    <div className="App">
      <DoctorState>
      <DoctorList/> 
     
      </DoctorState>
      
    </div>
  );
}

export default App;
