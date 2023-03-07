import React, { useState } from "react";

import Modal from "./modal";
import './table.css'
import closeIcon from '../img/Group 1.svg'

function TableUsers({ filtredUsers, setUsers, onSort, users ,setPaginationVasability}) {
  const [modalVisible, setModalVisible] = useState({ show: false, id: null });

  const handleDelete = (id) => {
    setModalVisible({ show: true, id });
    setPaginationVasability(false)
  };

  const handleDeleteTrue = () => {
    if (modalVisible.show && modalVisible.id) {
      setUsers(users.filter((user) => user.id !== modalVisible.id));
      setModalVisible({ show: false, id: null });
      setPaginationVasability(true)
    }
  };
  const handleDeleteFalse = () => {
    setModalVisible({ show: false, id: null });
    setPaginationVasability(true)
  };

  return (
    <div>
      <div className="tableHeader">
      <h6>Сортировка:</h6>
      <div className="tableHeaderButton">
      <button onClick={() => onSort("registration_date")}>
        Дата регистрации
      </button>
      <button onClick={() => onSort("rating")}>Рейтинг</button>
      </div>
      
      </div>
     

  

      {modalVisible.show && (
        <Modal
          handleDeleteTrue={handleDeleteTrue}
          handleDeleteFalse={handleDeleteFalse}
        />
      )}

      {/* <Table striped bordered hover size="sm"> */}
      <div className="table_wrapper">
        <table className="table">
        
          <thead>
          <tr className="table_tr">
            <th>Имя пользователя</th>
            <th>E-mail</th>
            <th>Дата регистрации</th>
            <th>Рейтинг</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {filtredUsers.map((user) => (
            <tr key={user.id}>
              <td className="username">{user.username}</td>
              <td className="email">{user.email}</td>
              {user.registration_date && <td className="registration_date">{user.registration_date.split('T')[0]}</td>}
              <td className="rating">{user.rating}</td>
              <td>
                <img className="closeIcon" src={closeIcon} alt="closeIcon" onClick={() => handleDelete(user.id)}></img>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
          
     
        </table>
        </div>
      
    </div>
  );
}

export default TableUsers;
