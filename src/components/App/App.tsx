import React, {useState, useEffect, useRef} from 'react';
// import logo from '../logo.svg';
import {IUserFull, IUserShort} from '../../types/data';
// import './App.css';
import UsersList from '../UsersList'

const App: React.FC = () => {
  const [users, setUsers] = useState<IUserFull[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLButtonElement> = (e) => {

  }

  useEffect(() => {
    fetch(
        'https://jsonplaceholder.typicode.com/users'
    )
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
        })
        .catch((error) => {
          console.error(error);
        });
  }, []);

  return (
    <div className="App">
      <h1>Список пользователей</h1>
      <UsersList users={users}/>
    </div>
  );
};

export default App;
