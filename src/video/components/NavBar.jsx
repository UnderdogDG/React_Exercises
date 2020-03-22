import React from 'react';
import { NavLink } from 'react-router-dom';

import ButtonRadial from '../components/ButtonRadial';

const NavBar = ()=>{
  return(
    <nav className="navbar navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">Video Player</NavLink>
      <ul className="navbar-nav w-75 d-flex flex-row justify-content-end">
        <li className="nav-item col-3 d-flex flex-row p-0">
          <ButtonRadial />
        </li>
      </ul>
      
    </nav>
  );
};

export default NavBar;