import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
    useParams
} from "react-router-dom";
import UserPage from '../UserPage/UserPage';
// import logo from '../logo.svg';
import {IUserFull, IUserShort} from '../../types/data';
// import './App.css';
import UsersList from '../UsersList'
import Home from "../Home/Home";

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
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home users={users} />}/>
              <Route path="user/:id" element={<UserPage user={users[id]}/>} />
          </Routes>
      </BrowserRouter>
  );
};

export default App;
