import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomeIndex.css";
import { images } from "../../assets/navcon";
import HomeIndexItem from "./HomeIndexItem";
import { getHomes, fetchHomes } from "../../store/home";

function HomesIndex(props) {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState("");
  const homes = useSelector(getHomes)
  
  useEffect(() => {
    dispatch(fetchHomes())
  }, []);

 

  const handleSelect = (index) => (e) => {
    setSelectedFilter(index);
  };

  if(!homes) return null

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
        {homes.map((home, i) => (
          <HomeIndexItem home={home}/>
        ))}
      </div>
    </>
  );
}

export default HomesIndex;
