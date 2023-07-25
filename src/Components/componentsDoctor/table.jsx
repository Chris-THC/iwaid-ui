import React, {useState, useContext} from 'react';
import '../../Css/CssTable.css';
import { Button } from './Button';
import { GetTheAppContext } from "../../Context/AppContext";
import { ModalDoctor } from './modal';
import { MyModalDelete } from './modalDelete';

/*nombre, especialidad, dirección,
 número de teléfono y dirección de correo electrónico
*/

export function TablaGeneric({ title, data, headers }) {

  const [showModalDelete, setShowModalDelete] = useState(false);
  // const[id, setid] = useState(null);
  const handleShowModalDelete = () => {
    setShowModalDelete(true);
    // setid(Id);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
  };
  
  const {
    handleShowModal,
    handleCloseModal,
    showModal,
    setGetDataFromTable,
    setActionButtonModal,
    handleShowFloatAlter,
    setTextAlert,
  } = useContext(GetTheAppContext);

  const displayedFields = [
    "name",
    "specialization",
    "phoneNumber",
    "address",
    "email",
  ];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOption, setSearchOption] = useState("name");

  const handleSearchOptionChange = (e) => {
    setSearchOption(e.target.value);
    setSearchTerm("");
  };

  const filteredData = data.filter((item) =>
    item[searchOption].toLowerCase().includes(searchTerm.toLowerCase())
  );
  


  return (
    <div className='container-doctors w-75 mt-4 mx-auto'>
  <div className='title-doctors d-flex align-items-center justify-content-between'>
    <h1 className='title-doctores'>{title}</h1>
    <Button type='Agregar' onClick={() => {
                handleShowModal();
                setActionButtonModal("Agregar");
              }} /> 
  </div>


  <div className="card-header">
          <div className=" card-body table-responsive">
            <div className="mb-3 table-bordered custom-table ">
              <label>
                <h4>Buscar</h4>
              </label>
      <div className="row">
        <div className="col-md-2">
          <select
            id="selectSearchDoctor"
            value={searchOption}
            onChange={handleSearchOptionChange}
            className="form-select mb-2"
          >
            <option value="name">Nombre</option>
            <option value="specialization">Especializacion</option>
            <option value="phoneNumber">Número de Teléfono</option>
            <option value="email">Correo</option>
          </select>
        </div><div className="col-md-4">
                  <input
                    id="inputSearchDoctor"
                    type="text"
                    autoComplete="off"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={`Buscar por ${searchOption}...`}
                    className="form-control rounded border"
                  />
                </div>
              </div>
            </div>


  <div className='table-doctors-container'>
    <div className='table-responsive'>
      <table className='table'>
            <thead className='thead-light'>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
                <th className='Action'>Acción</th>
              </tr>
            </thead>
            <tbody>
            {filteredData.map((item, index) => (
                  <tr key={index}>
                    {displayedFields.map((field) => (
                      <td key={field}>
                        <div id="idTextPatient" className="d-inline">
                          {item[field]}
                        </div>
                      </td>
                    ))}
    <td className='Buttons'>
      <Button type='Editar' onClick={() => {
        handleShowModal();
        setGetDataFromTable(item);
        setActionButtonModal("Editar");
      }} />
      
      <Button type='Eliminar' onClick={() => handleShowModalDelete()}/>
      {/*Id={item.id}*/} 
      <MyModalDelete show={showModalDelete} handleClose={handleCloseModalDelete}  />
    </td>
  </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ModalDoctor show={showModal} handleClose={handleCloseModal} />
      </div>
    </div>
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