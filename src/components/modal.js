import React from "react";
import "./modal.css";

function Modal({ handleDeleteTrue, handleDeleteFalse }) {
  return (
    <div className="modal_parent">
      <div className="modal_block">
        <div>
        <h3
          
        >
          Вы уверены, что хотите удалить пользователя?
        </h3>
        </div>
       
        <div className="modal_button">
        <button onClick={() => handleDeleteTrue()}>Да</button>
        <button onClick={() => handleDeleteFalse()}>Нет</button>
        </div>
  
      </div>
    </div>
  );
}

export default Modal;
