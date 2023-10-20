import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./HomeShowMainRight.css";
import { AiFillStar } from "react-icons/ai";
import { addReservation } from "../../../../../store/reserve";

function HomeShowMainRight({ home, rating, numReview }) {
  const dispatch = useDispatch();
  const history = useHistory();

  let today = getDate(0);
  let tommorrow = getDate(2);

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tommorrow);

  const [guests, setGuests] = useState(0);
  const [numNights, setNumNights] = useState(2);
  const [price, setPrice] = useState(home.nightPrice * numNights);

  const data = {
    checkIn,
    checkOut,
    guests,
  };


  const handleCheckIn = (e) => {
    setCheckIn(e.target.value);
    let daysBetween = Math.floor(
      (Date.parse(checkOut) - Date.parse(e.target.value)) / 86400000
    );
    setNumNights(daysBetween);
    setPrice(home.nightPrice * numNights);
  };
  const handleCheckOut = (e) => {
    setCheckOut(e.target.value);
    let daysBetween = Math.floor(
      (Date.parse(e.target.value) - Date.parse(checkIn)) / 86400000
    );
    setNumNights(daysBetween);
    setPrice(home.nightPrice * numNights);
  };
  const handleGuests = (e) => {
    setGuests(e.target.value);
  };

  const reserveToStore = (e) => {
    const data = {
      checkIn,
      checkOut,
      guests,
    };
    dispatch(addReservation(data));
  };

  return (
    <>
      <div className="reserve-box">
        <div className="reserve-header">
          <h3 className="reserve-header-price">${home.nightPrice} night</h3>

          <span className="reserve-header-rating">
            {rating !== "NaN" ? (
              <>
                <AiFillStar />
                <span className="reserve-rating">{rating} ·</span>
              </>
            ) : null}
            <span className="reserve-review"> {numReview} Reviews</span>
          </span>
        </div>
        <form className="modal-form">
          <div className="checkinout">
            <div className="reserve-form-box check-in">
              <input
                type="date"
                onChange={handleCheckIn}
                value={checkIn}
                required
              />
              <label className={"filled"}>Check-in</label>
            </div>
            <div className="reserve-form-box check-out">
              <input
                type="date"
                onChange={handleCheckOut}
                value={checkOut}
                required
              />
              <label className={"filled"}>Check-out</label>
            </div>
          </div>
          <div className="reserve-form-box guest">
            <input type="text" onChange={handleGuests} required />
            <label className={"filled"}>Guests</label>
          </div>
          <div>
            <Link to={`/stays/${home.id}`}>
              <button onClick={reserveToStore} className="login-button">
                Reserve
              </button>
            </Link>
          </div>
          <div></div>
          <div className="payment-warning">
            <span>You won't be charged yet</span>
          </div>
          <div className="pricing-data">
            <div className="night-sum">
              <span>
                ${home.nightPrice} x {numNights} nights
              </span>
              <span>${price}</span>
            </div>
            <div className="cleaning-box">
              <span>Cleaning fee</span>
              <span>$60</span>
            </div>
            <div className="service-box">
              <span>Airbnb service fee</span>
              <span>${Math.floor(price * 0.16)}</span>
            </div>
          </div>
          <div className="login-line"></div>
          <div className="total-price">
            <h3>Total before taxes</h3>
            <span>${price + 60 + Math.floor(price * 0.16)}</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default HomeShowMainRight;

function getDate(n) {
  var today = new Date();
  var dd = today.getDate() + n;
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  return yyyy + "-" + mm + "-" + dd;
}
