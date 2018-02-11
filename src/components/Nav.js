import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav () {
  return (
    <ul className='Nav__container'>
      <li>
        <NavLink exact activeClassName='Nav__active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='Nav__active' to='/battle'>Battle</NavLink>
      </li>
      <li>
        <NavLink activeClassName='Nav__active' to='/popular'>Popular</NavLink>
      </li>
    </ul>
  )
}

export default Nav;
