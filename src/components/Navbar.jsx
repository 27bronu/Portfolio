import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import toogle_light from '../assets/night.png';
import toogle_dark from '../assets/day.png';
import useJsonData from '../hooks/useJsonData';

export default function Navbar({ theme, setTheme }) {
  const navbarData = useJsonData();

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  if (!navbarData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="navbar">
        <h1 className='navbar-logo'>
          <NavLink to="/">{navbarData.navbar.name}</NavLink>
        </h1>
        <ul>
          <>
            <li>
              <NavLink to="/about">{navbarData.navbar.about}</NavLink>
            </li>
            <li>
              <NavLink to="/projects">{navbarData.navbar.projects}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{navbarData.navbar.contact}</NavLink>
            </li>
          </>
        </ul>
        <img onClick={toggle_mode} src={theme === 'light' ? toogle_light : toogle_dark} className='navbar-toggle-icon'/>
      </div>
    </div>
  );
};
