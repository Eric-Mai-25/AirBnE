import React from "react";
import "./Modal.css";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignUpFormPage";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ show, action, hide }) {
  const closeModal = (e) => {
    hide();
  };

  return show ? (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <header className="modal__header">
          <AiOutlineClose onClick={closeModal} className="close-button" />
          <h4>Login or Signup</h4>
        </header>
        <main className="modal__main">
          <div className="modal-line" />
          <h2 className="welcome-title">Welcome to Airbne</h2>
          {action ? <LoginFormPage hide={hide.bind(this)} /> : <SignupFormPage />}
        </main>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Modal;
