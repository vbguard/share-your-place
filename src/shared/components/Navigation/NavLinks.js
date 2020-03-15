import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavLinks.css'

function NavLinks(props) {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>All users</NavLink>
      </li>
      <li>
        <NavLink to='/:uid/places'>My Places</NavLink>
      </li>
      <li>
        <NavLink to='/places/new'>Add place</NavLink>
      </li>
      <li>
        <NavLink to='/auth'>Authenticate</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;