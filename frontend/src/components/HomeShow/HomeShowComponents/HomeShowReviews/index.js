import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

function HomeShowReviews({ reviews }) {
  if (!reviews) return <p>Loading Reviews</p>;
  let allReviews = Object.values(reviews);
  let reviewCount = allReviews.length;

  return (
    <>
      <div>
        <AiFillStar />
        <h3>2.0 · {reviewCount} reviews</h3>
        {allReviews.map((review) => {
          return (
            <div className="review-box">
              {/* <img src={review.profile}/> */}

              <div> {review.username}</div>
              <div>{review.reviewDate}</div>
              <div>{review.publicComment}</div>
            </div>
          );
        })}
        <button>Show All {reviewCount} Reviews</button>
      </div>
    </>
  );
}

export default HomeShowReviews;
