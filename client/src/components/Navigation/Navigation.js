import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav>
    <ul>
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink to="/signup" >Signup</NavLink></li>
      <li><NavLink to="login" >Login</NavLink></li>
    </ul>
  </nav>
)