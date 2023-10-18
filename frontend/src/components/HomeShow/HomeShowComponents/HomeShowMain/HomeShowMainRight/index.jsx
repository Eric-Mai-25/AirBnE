import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./HomeShowMainRight.css";
import { addReservation } from "../../../../../store/reserve";

function HomeShowMainRight({ home }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(0);
  const [numNights, setNumNights] = useState(3);
  const [price, setPrice] = useState(home.nightPrice * numNights);

  const data = {
    checkIn,
    checkOut,
    guests,
  };

  localStorage.setItem("reserve", JSON.stringify(data));

  const handleCheckIn = (e) => {
    setCheckIn(e.target.value);
  };
  const handleCheckOut = (e) => {
    setCheckOut(e.target.value);
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
          <span className="reserve-header-rating">rating</span>
        </div>
        <form className="modal-form">
          <div className="checkinout">
            <div className="reserve-form-box check-in">
              <input type="date" onChange={handleCheckIn} required />
              <label className={"filled"}>Check-in</label>
            </div>
            <div className="reserve-form-box check-out">
              <input type="date" onChange={handleCheckOut} required />
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
                {home.nightPrice} X {numNights} nights
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
