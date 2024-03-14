import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import useJsonData from '../hooks/useJsonData';

export default function ContactPage() {
  const jsonData = useJsonData();

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="contact-page">
      <h1>{jsonData.contact.title}</h1>
      <div className="social-icons">
        <a href={jsonData.contact.linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href={jsonData.contact.instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href={jsonData.contact.github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
}
