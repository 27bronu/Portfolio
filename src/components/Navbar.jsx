import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import toogle_light from '../assets/night.png';
import toogle_dark from '../assets/day.png';
import useJsonData from '../hooks/useJsonData';

export default function Navbar({ theme, setTheme }) {
  const data = useJsonData();

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div>
      <div className="navbar">
        <h1 className='navbar-logo'>
          {data && (
            <NavLink to="/">{data.navbar.name}</NavLink>
          )}
        </h1>
        <ul>
          {data && (
            <>
              <li>
                <NavLink to="/about">{data.navbar.about}</NavLink>
              </li>
              <li>
                <NavLink to="/projects">{data.navbar.projects}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{data.navbar.contact}</NavLink>
              </li>
            </>
          )}
        </ul>
        <img onClick={toggle_mode} src={theme === 'light' ? toogle_light : toogle_dark} className='navbar-toggle-icon'/>
      </div>
    </div>
  );
};
