import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import logo from "../../assets/logo/long-logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import "./Navigation.css";

function Navigation() {


  return (
    <div className="nav-bar">
      <div className="header-logo">
        <NavLink className="Airbne-name" exact to="/">
          <img src={logo} alt="logo" className="navbar-logo" />
        </NavLink>
      </div>
      <div className="search-bar">
        <div className="search-bar-text">Anywhere</div>
        <div className="search-bar-text">Any Week</div>
        <div className="search-bar-text2">Add Guest</div>
        <div className="search-icon-div">
          <HiOutlineSearch className="search-icon" />
        </div>
      </div>

      <ProfileButton />
      {/* {sessionLinks} */}
    </div>
  );
}

export default Navigation;
