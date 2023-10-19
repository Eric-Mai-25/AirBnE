import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { removeReview } from "../../../../store/review";
import { add, clear } from "../../../../store/reviewSession";
import "./HomeShowReviews.css";

function HomeShowReviews() {
  const dispatch = useDispatch();
  const { homeId } = useParams();

  // if (!reviews) return <p>Loading Reviews</p>;
  // let allReviews = Object.values(reviews);
  const reviews = useSelector((state) => Object.values(state.reviews));
  let allRating = 0
  reviews.forEach(review => allRating += review.rating)
  let finalrating = Number(allRating/reviews.length).toFixed(1)
  let reviewCount = reviews.length;

  const reviewToStore = (review) => (e) => {
    dispatch(add(review));
  };

  const createReview = (e) => {
    dispatch(clear());
  };

  const deleteReview = (reviewId) => (e) => {
    dispatch(removeReview(reviewId));
  };
  return reviews.length ? (
    <>
      <div className="reviews-box">
        <div className="total-review-data">
          <AiFillStar />
          <h3>{finalrating} · {reviewCount} reviews</h3>
        </div>
        <div className="review-map">
          {reviews.map((review) => {
            return (
              <div key={review.id} className="review-box">
                <div>
                  <div className="review-profile-data">
                    <img src={review.profile} className="review-prof-image" />
                    <div className="user-date">
                      <h4> {review.username}</h4>
                      <div>{review.reviewDate}</div>
                    </div>
                  </div>
                  <div>
                    <div>{review.publicComment}</div>
                  </div>
                  <div>
                    <Link to={`/reviews/${homeId}`}>
                      <button onClick={reviewToStore(review)}>
                        {" "}
                        Edit Review{" "}
                      </button>
                    </Link>
                    <button onClick={deleteReview(review.id)}>
                      Delete Review
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button>Show All {reviewCount} Reviews</button>
        <Link to={`/reviews/${homeId}`}>
          <button onClick={createReview}>Create Review</button>
        </Link>
      </div>
    </>
  ) : null;
}

export default HomeShowReviews;
