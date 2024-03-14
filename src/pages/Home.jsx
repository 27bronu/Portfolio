import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import fetchData from '../services';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromJson = async () => {
      const jsonData = await fetchData();
      if (jsonData) {
        setData(jsonData.home);
      }
    };
    fetchDataFromJson();
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        {data && (
          <>
            <h1 className="home-title">{data.title}</h1>
            <p className="home-description">{data.description}</p>
            <NavLink to="/about" className="home-about-button">
              {data.aboutButtonText}
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
