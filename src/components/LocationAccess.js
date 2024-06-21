import React, {useState} from "react";
import Modal from 'react-modal';
import '../assests/styles/homepage.css'

export default function Button() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [allowButtonColor, setAllowButtonColor] = useState(false);

  const allowLocationAccess = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
    setAllowButtonColor(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setAllowButtonColor(false);
  };

    return (
        <>
        <button class="book-slot-btn" onClick={openModal}>Book a slot</button>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Location Access Modal"
        className="modal"
      >
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <p>We need to access your location to book a slot. Allow access?</p>
          <button
            onClick={allowLocationAccess}
            className={allowButtonColor ? "allow-btn" : ""}
          >
            Allow
          </button>
          <button
            onClick={allowLocationAccess}
            className={allowButtonColor ? "deny-btn" : ""}
          >
            Deny
          </button>
        </div>
      </Modal>
      </>
    );
}