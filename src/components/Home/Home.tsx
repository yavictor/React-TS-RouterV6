import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import App from '../App/App';
// import logo from '../logo.svg';
// import './App.css';
import UsersList from '../UsersList'
import {IUserFull, IUserShort} from '../../types/data';

interface IHome extends IUserFull {
    users: []
};

const Hone: React.FC<IHome> = (props) => {
  const users = props.users;

  const handleChange: React.ChangeEventHandler<HTMLButtonElement> = (e) => {

  }


  return (
      <div className="Home">
          <h1>Список пользователей</h1>
          <UsersList users={users}/>
      </div>
  );
};

export default App;
