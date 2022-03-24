/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a className='navbar-brand'>
          <img
            src='logo512.png'
            width='30'
            height='30'
            className='d-inline-block align-top mr-2'
            alt=''
          />
          React Dashboard
        </a>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/users'>
              Users
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/todos'>
              ToDos
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/albums'>
              Albums
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
