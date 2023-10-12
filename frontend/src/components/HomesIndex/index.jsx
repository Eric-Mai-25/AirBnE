import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./HomeIndex.css";
import { images } from "../../assets/navcon";
import HomeIndexItem from "./HomeIndexItem";

function HomesIndex(props) {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {}, []);

  const handleSelect = (index) => (e) => {
    setSelectedFilter(index);
  };

  return (
    <>
      <div className="nav-filter">
        {images.map((icon, index) => {
          return (
            <div
              key={index}
              className={
                index === selectedFilter ? "selected-box" : "filter-box"
              }
              onClick={handleSelect(index)}
            >
              <img className="filter-img" src={icon.imgSrc} />
              <label className="filter-label">{icon.label}</label>
            </div>
          );
        })}
      </div>
      <div className="card-box">
        {[...Array(20)].map((_, i) => (
          <HomeIndexItem />
        ))}
      </div>
    </>
  );
}

export default HomesIndex;
