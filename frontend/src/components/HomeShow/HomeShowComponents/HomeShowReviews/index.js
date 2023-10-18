import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { add, clear, removeReview } from "../../../../store/review";


function HomeShowReviews({ reviews }) {
  const dispatch = useDispatch();
  const { homeId } = useParams();

  if (!reviews) return <p>Loading Reviews</p>;
  let allReviews = Object.values(reviews);
  let reviewCount = allReviews.length;

  const reviewToStore = (review) => (e) => {
    dispatch(add(review));
  };

  const createReview = (e) => {
    dispatch(clear());
  };

  const deleteReview = (reviewId) => (e) => {
    dispatch(removeReview(reviewId));
  };
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
              <Link to={`/reviews/${homeId}`}>
                <button onClick={reviewToStore(review)}> Edit Review </button>
              </Link>
              <button onClick={deleteReview(review.id)}>Delete Review</button>
            </div>
          );
        })}
        <button>Show All {reviewCount} Reviews</button>
        <Link to={`/reviews/${homeId}`}>
          <button onClick={createReview}>Create Review</button>
        </Link>
      </div>
    </>
  );
}

export default HomeShowReviews;
