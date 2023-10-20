import React from "react";
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
