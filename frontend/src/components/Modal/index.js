import React from "react";
import "./Modal.css";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignUpFormPage";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ show, action, hide }) {
  const closeModal = (e) => {
    hide();
  };

  let modalSession;

  switch (action) {
    case "login":
      modalSession = (
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
              <LoginFormPage hide={hide.bind(this)} />
            </main>
          </div>
        </>
      );
      break;
    case "signup":
      modalSession = (
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
              <SignupFormPage />
            </main>
          </div>
        </>
      );
      break;
    case "review":
      modalSession = <></>;
    default:
      break;
  }

  return show ? <>{modalSession}</> : null;
}

export default Modal;
