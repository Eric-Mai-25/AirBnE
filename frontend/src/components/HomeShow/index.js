import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHome, fetchHome } from "../../store/home";

import "./HomeShow.css";
import HomeTop from "./HomeShowComponents/HomeTop";
import HomeShowImages from "./HomeShowComponents/HomeShowImages";
import HomeShowMain from "./HomeShowComponents/HomeShowMain";
import HomeShowReviews from "./HomeShowComponents/HomeShowReviews";

function HomeShow(props) {
  const dispatch = useDispatch();
  const { homeId } = useParams();
  const home = useSelector(getHome(homeId));
  
  console.log(home, "this bitch is on fire");

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
            <HomeShowMain home={home}/>
            <HomeShowReviews reviews={home.reviews}/>
        </div>
    </div>
    </>
  );
}

export default HomeShow;
