import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import ButtonRadial from '../components/ButtonRadial';

const Nav = styled.nav`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
`;

const NavBar = ({ changeTheme })=>{
  return(
    <Nav className="navbar" style={{borderBottom: '1px solid #00e5ff', boxSizing: 'border-box'}}>
      <NavLink to="/" className="navbar-brand">Video Player</NavLink>
      <ul className="navbar-nav d-flex flex-row justify-content-end" style={{
        width: 'calc(100% - 150px)'
      }}>
        <li className="nav-item d-flex flex-row p-2 pl-4" style={{borderLeft: '1px solid #757575', boxSizing: 'border-box'}}>
          <ButtonRadial changeTheme={changeTheme} />
        </li>
      </ul>
      
    </Nav>
  );
};

export default NavBar;