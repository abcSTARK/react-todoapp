import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Home = (props) => {
  const [rowUser, setUser] = useState([]);
  const [rowToDo, setToDo] = useState([]);
  const [rowAlbum, setAlbum] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((rowUser) => setUser(rowUser));
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((result) => result.json())
      .then((rowToDo) => setToDo(rowToDo));
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((result) => result.json())
      .then((rowAlbum) => setAlbum(rowAlbum));
  }, []);

  return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>User Dashboard</h1>
          <p className='lead'>Total Users = {rowUser.length}</p>
        </div>
      </div>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>Todos Dashboard</h1>
          <p className='lead'>Total Tasks = {rowToDo.length}</p>
        </div>
      </div>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>Albums Dashboard</h1>
          <p className='lead'>Total Albums = {rowAlbum.length}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
