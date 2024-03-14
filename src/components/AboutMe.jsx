import React, { useState } from 'react';
import photo from '../assets/me.jpeg';
import Modal from './Modal';

function AboutMe() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="button-wrapper">
      <button className='about-button' onClick={toggleModal}>About Me</button>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        content={
          <div>
            <div>
            <img className="about-photo" src={photo} alt="Your Photo" />
            </div>
            <p>
              My name is Bruno and I am a web developer student. <hr />
              Started my journey as a web developer in 2022 with an internship in Proside. <hr />
              Basic knowledge of HTML, CSS, JavaScript, React.
            </p>
            <div className="button-wrapper">
              <a className='about-button' href="your_cv.pdf" download>Download CV</a>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default AboutMe;
