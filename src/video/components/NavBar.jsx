import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ()=>{
  return(
    <nav className="navbar navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">Video Player</NavLink>
      
    </nav>
  );
};

export default NavBar;