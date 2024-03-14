import React from 'react';

const Modal = ({ showModal, toggleModal, content }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={toggleModal}>
          &times;
        </button>
        <div className="modal-body">{content}</div>
      </div>
    </div>
  );
};

export default Modal;