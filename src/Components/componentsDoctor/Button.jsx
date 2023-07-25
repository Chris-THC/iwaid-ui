import React from 'react';
import '../../Css/CssTable.css';
import { BsPersonFillAdd } from "react-icons/bs";
import { MdChangeCircle, MdDeleteForever } from 'react-icons/md';

export function Button({ type, onClick }) {
  return (
    <button className={`Button ${type}`} onClick={onClick}>
      {type === 'Agregar' ? <BsPersonFillAdd className='iconAgregar'/> : type === 'Editar' ? <MdChangeCircle  className='icon' /> : type === 'Eliminar' ? <MdDeleteForever className='icon' /> : null}
    </button>
  );
}

