import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHome, fetchHome } from "../../store/home";

import "./HomeShow.css";
import HomeTop from "./HomeShowComponents/HomeTop";
import HomeShowImages from "./HomeShowComponents/HomeShowImages";

function HomeShow(props) {
  const dispatch = useDispatch();
  const { homeId } = useParams();
  const home = useSelector(getHome(homeId));
  
  useEffect(() => {
      dispatch(fetchHome(homeId));
    }, [homeId]);
    
    if(!home) return <p>Loading...</p>

  return (
    <>
    <div className="show-page">
        <div>
            <HomeTop home={home}/>
            <HomeShowImages/>
            
        </div>

    </div>
      {/* <h1>{home.title}</h1>
      <p>{home.property_type}</p>
      <p>{home.address}</p>
      <p>{home.aptNum}</p>
      <p>{home.city}</p>
      <p>{home.state}</p>
      <p>{home.country}</p>
      <p>{home.description}</p>
      <p>{home.numBeds}</p>
      <p>{home.numBedrooms}</p>
      <p>{home.numBathrooms}</p>
      <p>{home.nightPrice}</p>
      <p>{home.category}</p> */}
    </>
  );
}

export default HomeShow;
