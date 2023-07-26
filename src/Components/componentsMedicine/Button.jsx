import React from 'react';
import '../../Css/CssTable.css';
import { BsPersonFillAdd } from "react-icons/bs";
import { MdChangeCircle, MdDeleteForever } from 'react-icons/md';
import { Button } from "react-bootstrap";

export function ButtonI({ type, onClick }) {
  return (
    <Button className={`Button ${type}`} onClick={onClick}>
      {type === 'Agregar' ? <BsPersonFillAdd id="btnAdd" className='ms-2 me-2 mb-1' variant="primary" /> : type === 'Editar' ? <MdChangeCircle id="btnTables"  className="btn-icon-lg" variant="primary" /> : type === 'Eliminar' ? <MdDeleteForever id="btnTables" className='"ms-2 me-2 mb-1 d-inline"' variant="danger" /> : null}
      {type === 'Agregar' ? 'Agregar' : type === 'Editar' ? 'Editar' : type === 'Eliminar' ? 'Eliminar' :null}
      </Button>
  );
}

