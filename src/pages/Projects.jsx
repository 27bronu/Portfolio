import React from 'react';
import useJsonData from '../hooks/useJsonData';

export default function Projects() {
  const projectsData = useJsonData();

  if (!projectsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <h2>{projectsData.projects.title}</h2>
    </div>
  );
}
