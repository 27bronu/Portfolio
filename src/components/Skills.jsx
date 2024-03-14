import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import htmlImage from '../assets/html.png';
import cssImage from '../assets/css.png';
import jsImage from '../assets/js.png';
import reactImage from '../assets/react.png';
import nodeImage from '../assets/node-js.png';
import fetchData from '../services';

function Skills() {
  const [showModal, setShowModal] = useState(false);
  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    const fetchDataFromJson = async () => {
      const jsonData = await fetchData();
      if (jsonData) {
        setSkillsData(jsonData.skills);
      }
    };
    fetchDataFromJson();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="button-wrapper">
      <button className="skills-button" onClick={toggleModal}>
        {skillsData && skillsData.button}
      </button>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        content={
          <div>
            {skillsData && (
              <>
                <h2 className='modal-title'>{skillsData.title}</h2>
                <ul className="language-list">
                  <li><img src={htmlImage} alt="HTML" /></li>
                  <li><img src={cssImage} alt="CSS" /></li>
                  <li><img src={jsImage} alt="JavaScript" /></li>
                  <li><img src={reactImage} alt="React" /></li>
                  <li><img src={nodeImage} alt="Node" /></li>
                </ul>
              </>
            )}
          </div>
        }
      />
    </div>
  );
}

export default Skills;
