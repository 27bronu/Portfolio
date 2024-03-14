import React, { useState } from 'react';
import Modal from './Modal';
import useJsonData from '../hooks/useJsonData';
import photo from '../assets/me.jpeg';

function AboutMe() {
  const aboutMeData = useJsonData();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (!aboutMeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="button-wrapper">
      <button className='about-button' onClick={toggleModal}>
        {aboutMeData.aboutMe.title}
      </button>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        content={
          <div>
            <>
              <div>
                <img className="about-photo" src={photo} alt="Your Photo" />
              </div>
              <p>
                {aboutMeData.aboutMe.description}
              </p>
              <hr />
              <p>
                {aboutMeData.aboutMe.description2}
              </p>
              <hr />
              <p>
                {aboutMeData.aboutMe.description3}
              </p>
              <div className="button-wrapper">
                <a className='about-button' href="your_cv.pdf" download>{aboutMeData.aboutMe.download}</a>
              </div>
            </>
          </div>
        }
      />
    </div>
  );
}

export default AboutMe;
