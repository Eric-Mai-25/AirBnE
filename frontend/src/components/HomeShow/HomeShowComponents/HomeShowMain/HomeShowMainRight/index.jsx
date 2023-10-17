import React, {useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./HomeShowMainRight.css";

function HomeShowMainRight({ home }) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(0)

  
  const data = {
    checkIn,
    checkOut,
    guests,
  }

  localStorage.setItem("reserve", JSON.stringify(data))

  const handleCheckIn = e => {
    setCheckIn(e.target.value)
  }
  const handleCheckOut = e => {
    setCheckOut(e.target.value)
  }
  const handleGuests = e => {
    setGuests(e.target.value)
  }

  return (
    <>
      <div className="reserve-box">
        <div className="reserve-price">${home.nightPrice} night</div>
        <form >
          <div className="form-box">
            <input type="date" onChange={handleCheckIn} required />
            <label className={"filled"} >Check-in</label>
          </div>
          <div className="form-box">
            <input type="date"  onChange={handleCheckOut}required />
            <label className={"filled"}>Check-out</label>
          </div>
          <div className="form-box">
            <input type="text" onChange={handleGuests} required />
            <label className={"filled"}>Guests</label>
          </div>
          <div className="containter container-two">
            <Link to={`/stays/${home.id}`}  className="login-button">
              Reserve
            </Link>
            <span>You won't be charged yet</span>
            <span>{home.nightPrice} X 3 nights</span>
            <span>Cleaning fee</span>
            <span>Airbnb service fee</span>
          </div>
          <div className="login-line"></div>
          <span>Total before taxes</span>
        </form>
      </div>
    </>
  );
}

export default HomeShowMainRight;
