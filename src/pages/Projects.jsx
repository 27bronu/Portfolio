import React, { useState } from 'react';
import useJsonData from '../hooks/useJsonData';
import Modal from '../components/Modal';
import extsocial from '../assets/extsocial.png';

export default function Projects() {
  const projectsData = useJsonData();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (!projectsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <div className="projects-container">
        <div className="project-item">
          <button onClick={toggleModal}>{projectsData.projects.title}</button>
        </div>
      </div>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        content={(
          <>
            <img className='project-image' src={extsocial}/>
            <a href={projectsData.projects.link} target="_blank" rel="noopener noreferrer">{projectsData.projects.view_project}</a>
          </>
        )}
      />
    </div>
  );
}
