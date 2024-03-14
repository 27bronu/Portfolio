import React, { useState, useEffect } from 'react';
import fetchData from '../services';

export function Projects() {
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    const fetchDataFromJson = async () => {
      const jsonData = await fetchData();
      if (jsonData) {
        setProjectsData(jsonData.projects);
      }
    };
    fetchDataFromJson();
  }, []);

  return (
    <div className="home-container">
      <h2>{projectsData && projectsData.title}</h2>
    </div>
  );
}
