import React, {useState} from 'react';
import '../Css/App.css';
import { MyModalEditar } from './modalEditar';
import { MyModal } from './modal';



/*nombre, especialidad, dirección,
 número de teléfono y dirección de correo electrónico
*/

export function TablaGenerica({ title, data, headers }) {


  const [showModal, setShowModal] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };


  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModalEditar = () => {
    setShowModalEditar(true);
  };


  const handleCloseModalEditar = () => {
    setShowModalEditar(false);
  };


  return (
    <div className='container-doctors mt-4'>
  <div className='title-doctors d-flex align-items-center justify-content-between'>
    <h1 className='title-doctores'>{title}</h1>
    <button className='btn btn-primary' onClick={handleShowModal}>Agregar</button>    
    <MyModal show={showModal} handleClose={handleCloseModal} />
  </div>
  <div className='table-doctors-container'>
    <table className='table'>
      <thead className='thead-light'>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.keys(item).map((key) => (
              key !== 'id' && <td key={key}>{item[key]}</td>
            ))}
            <td>
            <button className='btn btn-primary' onClick={handleShowModalEditar}>Editar</button>
              <MyModalEditar show={showModalEditar} handleClose={handleCloseModalEditar} />
              <button className='btn btn-danger'>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  
  );
}


// export function TablaGenerica({ title, data, headers }) {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedPatient, setSelectedPatient] = useState(null);

//   const handleButtonClick = (patient) => {
//     setSelectedPatient(patient);
//     setShowModal(true);
//   };

//   return (
//     <div className='container-doctors'>
//       <div className='title-doctors'>
//         <h1 className='title-doctores'>{title}</h1>
//         <Button tipo='Agregar' onClick={() => handleButtonClick(item)} />
//       </div>
//       <div className='table-doctors-container'>
//         <table>
//           <thead>
//           <tr>
//               {headers.map((header, index) => (
//                 <th key={index}>{header}</th>
//               ))}
//               <th>Acción</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//               {Object.keys(item).map((key) => (
//                 key !== 'id' && <td key={key}>{item[key]}</td>
//               ))}
//                 <td>
//                   <Button tipo='Editar' onClick={() => handleButtonClick(item)} />
//                   <Button tipo='Eliminar' onClick={() => handleButtonClick(item)} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {showModal && <CreatePatient show={showModal} handleClose={() => setShowModal(false)} patient={selectedPatient} />}
//     </div>
//   );
// }


  // <div className='container-doctors'>
    //   <div className='title-doctors'>
    //     <h1 className='title-doctores'>{title}</h1>
    //     <Button tipo='Agregar' onClick={handleShowModal} />
    //     <MyModal show={showModal} handleClose={handleCloseModal} />
    //   </div>
    //   <div className='table-doctors-container'>
    //     <table>
    //       <thead>
    //         <tr>
    //           {headers.map((header, index) => (
    //             <th key={index}>{header}</th>
    //           ))}
    //           <th>Acción</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((item, index) => (
    //           <tr key={index}>
    //             {Object.keys(item).map((key) => (
    //               key !== 'id' && <td key={key}>{item[key]}</td>
    //             ))}
                
    //               <td>
    //                   <Button tipo='Editar' /> 
    //                   <Button tipo='Eliminar' /> 
    //               </td>
               
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>