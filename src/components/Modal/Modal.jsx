import React from 'react';
import './Modal.sass';

export function Modal({active, data}){
  return (
    <div className={`modal-overlay ${active && "active"}`}>
      <div className="modal">
        Modal data
      </div>
    </div>
  )
}