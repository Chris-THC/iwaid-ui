import React from 'react';
import '../Css/App.css';


export function Button({ type, onClick }) {
  return (
    <button className={`Button ${type}`} onClick={onClick}>
      {type}
    </button>
  );
}

