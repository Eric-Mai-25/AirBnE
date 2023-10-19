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

  const reviews = useSelector((state) => Object.values(state.reviews));
  let allRating = 0;
  reviews.forEach((review) => (allRating += review.rating));
  let finalrating = Number(allRating / reviews.length).toFixed(1);

  useEffect(() => {
    dispatch(fetchHome(homeId));
  }, []);

  if (!home) return <p>Loading...</p>;

  return (
    <>
      <div className="show-page">
        <div>
          <HomeTop home={home} rating={finalrating} numReview={reviews.length}/>
          <HomeShowImages />
          <HomeShowMain home={home} rating={finalrating} numReview={reviews.length}/>
          <HomeShowReviews />
        </div>
      </div>
    </>
  );
}

export default HomeShow;
