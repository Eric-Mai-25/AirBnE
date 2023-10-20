import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser, getUser } from "../../store/user";
import { removeReview } from "../../store/review";
import { add, clear } from "../../store/reviewSession";
import "./ReservationIndex.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ReservationIndex() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((state) => state.user[userId]);
  const reviews = useSelector((state) => Object.values(state.reviews));
  const reservations = useSelector((state) =>
    Object.values(state.reservations)
  );

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, []);

  const reviewToStore = (review) => (e) => {
    dispatch(add(review));
  };
  const deleteReview = (reviewId) => (e) => {
    dispatch(removeReview(reviewId));
  };
  return (
    <>
      <div className="reserve-details">
        <div className="user-fate">
          <div className="left-data">
            <h2>Your trip(s)</h2>
          </div>
          <div className="left-data">
            <div className="reserved">
              {reservations.map((reserve) => {
                return (
                  <div>
                    <Link
                      className="reserved-link"
                      to={`/homes/${reserve.homeId}`}
                    >
                      <div key={reserve.id} className="reserved-box">
                        <div className="review-profile-data">
                          <img
                            src={reserve.photoUrls[0]}
                            className="reserved-prof-image"
                          />
                          <div className="date-info">
                            <h4> {reserve.homeTitle}</h4>
                            <div className="reserved-date">
                              {reserve.checkInDate} - {reserve.checkOutDate}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div></div>
          </div>

          <div className="login-line"></div>
          <div className="left-data">
              <div className="left-data">
                <h2>Your review(s)</h2>
              </div>
            <div className="reserved">
              {reviews.map((review) => {
                return (
                  <div>
                    <Link
                      className="reserved-link"
                      to={`/homes/${review.homeId}`}
                    >
                      <div key={review.id} className="reserved-box">
                        <div>
                          <div className="review-profile-data">
                            <img
                              src={user.profilePicture}
                              className="review-prof-image"
                            />
                            <div className="user-date">
                              <h4> {user.username}</h4>
                              <div>{review.reviewDate}</div>
                            </div>
                          </div>
                          <div>
                            <div>{review.publicComment}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <Link to={`/reviews/${review.homeId}`}>
                        <button className="review-create" onClick={reviewToStore(review)}>
                          {" "}
                          Edit Review{" "}
                        </button>
                      </Link>
                      <button  className="review-create delete" onClick={deleteReview(review.id)}>
                        Delete Review
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div></div>
          </div>

          <div className="login-line"></div>
        </div>
      </div>
    </>
  );
}

export default ReservationIndex;
