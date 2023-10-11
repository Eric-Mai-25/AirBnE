import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./HomeIndex.css";
import { images } from "../../assets/navcon";

function HomesIndex(props) {
  const dispatch = useDispatch();
  const homes = useSelector();

  useEffect(() => {
    dispatch();
  }, []);

  return (
    <>
      <div>
        {images.map((icon, index) => {
          return (
            <div>
              <img key={index} src={icon.imgSrc} />
              <label>{icon.label}</label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomesIndex