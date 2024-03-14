import React, { useState } from 'react';
import Modal from './Modal';
import htmlImage from '../assets/html.png';
import cssImage from '../assets/css.png';
import jsImage from '../assets/js.png';
import reactImage from '../assets/react.png';
import nodeImage from '../assets/node-js.png';

function Skills() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="button-wrapper">
      <button className="skills-button" onClick={toggleModal}>View Skills</button>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        content={
          <div>
            <h2 className='modal-title'>My Skills</h2>
            <ul className="language-list">
              <li><img src={htmlImage} alt="HTML" /></li>
              <li><img src={cssImage} alt="CSS" /></li>
              <li><img src={jsImage} alt="JavaScript" /></li>
              <li><img src={reactImage} alt="React" /></li>
              <li><img src={nodeImage} alt="Node" /></li>
            </ul>
          </div>
        }
      />
    </div>
  );
}

export default Skills;
