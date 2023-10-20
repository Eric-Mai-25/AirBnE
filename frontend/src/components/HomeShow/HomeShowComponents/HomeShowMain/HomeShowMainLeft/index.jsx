import React, { useEffect, useState } from "react";
import { LiaBedSolid } from "react-icons/lia";
import "./HomeShowMainLeft.css";

function HomeShowMainLeft({ home }) {

  const [startDate , setStartDate] = useState('')
  const [endDate , setEndDate] = useState('')
  
  return (
    <>
      <div className="left-title-box">
        <h3 className="left-title">{home.propertyType} hosted by Eric </h3>
        <div className="left-details">
          <span>2 guests </span>
          <span> · {home.numBedrooms} bedroom </span>
          <span> · {home.numBeds} beds </span>
          <span> · {home.numBathrooms} bathrooms </span>
        </div>
      </div>
      <div className="left-title-box description">
        <p>{home.description}</p>
      </div>
      <div className="bedroom-box">
        <h3 className="sleep-title">Where you'll sleep</h3>
        <div className="left-title-box beds">
          {[...Array(home.numBedrooms)].map((x, i) => {
            return (
              <div key={i} className="bed-box">
                <div className="bed-box-info">
                  <LiaBedSolid className="bedroom-title" size='25px' />
                  <h4 className="bedroom-title">Bedroom {i + 1}</h4>
                  <p className="bedroom-title">1 Double Bed</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="left-title-box description">
        <h3>What this place offers</h3>
        <p>{home.description}</p>
      </div>
      </div>
    </>
  );
}

export default HomeShowMainLeft;
