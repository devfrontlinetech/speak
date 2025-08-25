import React from 'react';
//import './Modal.css'; // Import custom CSS for styling

const Modal = ({ show, handleClose }) => {
  if (!show) return null; // Don't render the modal if it's not visible

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal Title</h5>
          <button className="close" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          

        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
