import React, { useState } from 'react';
import useJsonData from '../hooks/useJsonData';
import Modal from '../components/Modal';
import extsocial from '../assets/extsocial.png';

export default function Projects() {
  const projectsData = useJsonData();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!projectsData) {
    return <div>Loading...</div>;
  }

  const project = projectsData.projects;

  return (
    <div className="home-container">
      <div className="projects-container">
        <div className="project-item">
          <button onClick={openModal}>{project.title}</button>
        </div>
      </div>
      <Modal
        showModal={modalOpen}
        toggleModal={closeModal}
        content={(
          <>
            <img className='project-image' src={extsocial}/>
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.view_project}</a>
          </>
        )}
      />
    </div>
  );
}
