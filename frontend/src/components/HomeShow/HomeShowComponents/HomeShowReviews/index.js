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
  let allRating = 0;
  let reviewCount = reviews.length;
  let finalrating = 0;
  if (reviews.length > 0) {
    reviews.forEach((review) => (allRating += review.rating));
    finalrating = Number(allRating / reviews.length).toFixed(1);
  }

  const createReview = (e) => {
    dispatch(clear());
  };

  return reviews.length ? (
    <>
      <div className="reviews-box">
        <div className="total-review-data">
          <AiFillStar />
          <h3>
            {finalrating} · {reviewCount} reviews
          </h3>
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
                </div>
              </div>
            );
          })}
        </div>
        {/* <button>Show All {reviewCount} Reviews</button> */}
        <div className="review-create-box">
          <Link to={`/reviews/${homeId}`}>
            <button className="review-create" onClick={createReview}>
              Create Review
            </button>
          </Link>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="reviews-box">
        <div className="total-review-data">
          <h3>{reviewCount} reviews</h3>
        </div>
      </div>
    </>
  );
}

export default HomeShowReviews;
