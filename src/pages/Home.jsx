import React from 'react';
import { NavLink } from 'react-router-dom';
import useJsonData from '../hooks/useJsonData';

export default function Home() {
  const homeData = useJsonData();

  if (!homeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <div className="home-content">
        <>
          <h1 className="home-title">{homeData.home.title}</h1>
          <p className="home-description">{homeData.home.description}</p>
          <NavLink to="/about" className="home-about-button">
            {homeData.home.aboutButtonText}
          </NavLink>
        </>
      </div>
    </div>
  );
}
