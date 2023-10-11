import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as sessionActions from "../../../store/session";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiUserCircleFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import "./ProfileButton.css";
import Modal from "../../Modal";

function ProfileButton() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [currAction, setCurrAction] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const handleModal = (field) => (e) => {
    setShowModal(!showModal);
    setCurrAction(field);
  };
  const hideModal = (e) => {
    setShowModal(false);
  };

  let sessionLinks;
  if (!sessionUser) {
    sessionLinks = (
      <>
        {showMenu && (
          <div className="user-drop-down">
            <button onClick={handleModal(true)} className="log-btn">
              Log In
            </button>
            <button onClick={handleModal(false)} className="signup-btn">
              Sign Up
            </button>
            <div className="login-line" />
          </div>
          // {/* <NavLink to="/login">Log In</NavLink>
          // <NavLink to="/signup">Sign Up</NavLink> */}
        )}
      </>
    );
  } else {
    sessionLinks = (
      <>
        {showMenu && (
          <div className="user-drop-down">
            <button className="log-btn" >Messages</button>
            <button style={{'font-weight': 'bold'}} className="signup-btn">Trips</button>
            <button  style={{'font-weight': 'bold'}}className="signup-btn">Wishlists</button>
            <div className="login-line" />
            <button className="signup-btn">Airbne your home</button>
            <button className="signup-btn">Account</button>
            <div className="login-line" />
            <button onClick={logout} className="logout-btn">Log Out</button>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="profile-button" onClick={openMenu}>
        <div className="profile-dropdown">
          <GiHamburgerMenu size={"0.7em"} className="hamburger" />
          <PiUserCircleFill className="user-fill" />
        </div>
      </div>
      <div className="dropdown-content">{sessionLinks}</div>
      <Modal show={showModal} action={currAction} hide={hideModal.bind(this)} />
    </>
  );
}

export default ProfileButton;
