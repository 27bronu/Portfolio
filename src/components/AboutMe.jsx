import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import fetchData from '../services';
import photo from '../assets/me.jpeg';

function AboutMe() {
  const [showModal, setShowModal] = useState(false);
  const [aboutMeData, setAboutMeData] = useState(null);

  useEffect(() => {
    const fetchDataFromJson = async () => {
      const jsonData = await fetchData();
      if (jsonData) {
        setAboutMeData(jsonData.aboutMe);
      }
    };
    fetchDataFromJson();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="button-wrapper">
      <button className='about-button' onClick={toggleModal}>
        {aboutMeData && aboutMeData.title}
      </button>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        content={
          <div>
            {aboutMeData && (
              <>
                <div>
                  <img className="about-photo" src={photo} alt="Your Photo" />
                </div>
                <p>
                  {aboutMeData.description} <hr />
                  {aboutMeData.description2} <hr />
                  {aboutMeData.description3}
                </p>
                <div className="button-wrapper">
                  <a className='about-button' href="your_cv.pdf" download>{aboutMeData.download}</a>
                </div>
              </>
            )}
          </div>
        }
      />
    </div>
  );
}

export default AboutMe;
