import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import toogle_light from '../assets/night.png';
import toogle_dark from '../assets/day.png';
import fetchData from '../services';

export default function Navbar({ theme, setTheme }) {
  const [navbarData, setNavbarData] = useState(null);

  useEffect(() => {
    const fetchDataFromJson = async () => {
      const jsonData = await fetchData();
      if (jsonData) {
        setNavbarData(jsonData.navbar);
      }
    };
    fetchDataFromJson();
  }, []);

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div>
      <div className="navbar">
        <h1 className='navbar-logo'>
          {navbarData && (
            <NavLink to="/Portfolio/">{navbarData.name}</NavLink>
          )}
        </h1>
        <ul>
          {navbarData && (
            <>
              <li>
                <NavLink to="about">{navbarData.about}</NavLink>
              </li>
              <li>
                <NavLink to="projects">{navbarData.projects}</NavLink>
              </li>
              <li>
                <NavLink to="contact">{navbarData.contact}</NavLink>
              </li>
            </>
          )}
        </ul>
        <img onClick={toggle_mode} src={theme === 'light' ? toogle_light : toogle_dark} className='navbar-toggle-icon'/>
      </div>
    </div>
  );
};
