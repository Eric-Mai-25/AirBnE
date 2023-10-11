import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as sessionActions from "../../../store/session";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiUserCircleFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import "./ProfileButton.css";

function ProfileButton() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

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

  let sessionLinks;
  if (!sessionUser) {
    sessionLinks = (
      <>
        {showMenu && (
          <div className="user-drop-down">
            <div className="line"></div>
            <button className="log-btn">Log In</button>
            <button className="signup-btn">Sign Up</button>
            <div className="login-line"/>
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
          <ul className="user-drop-down">
            <li>{sessionUser.username}</li>
            <li>{sessionUser.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        )}
      </>
    );
  }

  return (
    <>
      <div className="profile-button" onClick={openMenu}>
        <div className="profile-dropdown">
          <GiHamburgerMenu size={'0.7em'}className="hamburger" />
          <PiUserCircleFill className="user-fill" />
        </div>
      </div>
      <div className="dropdown-content">{sessionLinks}</div>
    </>
  );
}

export default ProfileButton;
