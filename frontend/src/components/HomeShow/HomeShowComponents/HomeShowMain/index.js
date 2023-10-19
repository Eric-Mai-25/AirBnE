import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HomeShowMainLeft from "./HomeShowMainLeft";
import HomeShowMainRight from "./HomeShowMainRight";
import "./HomeShowMain.css";

function HomeShowMain({home, rating, numReview}) {
  return (
    <>
      <div className="main-box">
        <div className="left-grid">
          <HomeShowMainLeft home={home}/>
        </div>
        <div className="right-grid">
          <HomeShowMainRight home={home} rating={rating} numReview={numReview}/>
        </div>
      </div>
    </>
  );
}

export default HomeShowMain;
