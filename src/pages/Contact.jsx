import React from 'react';
import useJsonData from '../hooks/useJsonData';
export default function ContactPage() {
  const jsonData = useJsonData();

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="contact-page">
      <h1 className='contact-title'>{jsonData.contact.title}</h1>
      <div className="social-icons">
        <a href={jsonData.contact.linkedin} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin fa-2x"></i>
        </a>
        <a href={jsonData.contact.instagram} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram fa-2x"></i>
        </a>
        <a href={jsonData.contact.github} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
}
