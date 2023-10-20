import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../../../store/reserve";
import { useParams } from "react-router-dom";
import { Link} from "react-router-dom";
import "./ReservationDataLeft.css";
import LoginFormPage from "../../LoginFormPage";

function ReservationDataLeft({ data }) {
  const MONTH = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const dispatch = useDispatch();
  const { homeId } = useParams();
  const user = useSelector((state) => state.session.user);
  const [checkIn] = useState(data.checkIn);
  const [checkOut] = useState(data.checkOut);
  const [guests] = useState(data.guests);

  const handleClick = (e) => {
    const reserveData = {
      check_in_date: checkIn,
      check_out_date: checkOut,
      guests: guests,
      home_id: homeId,
      guest_id: user.id,
      reservation_status: "pending",
    };
    dispatch(createReservation(reserveData));
  };

  let isLogged;

  if (!user) {
    isLogged = (
      <>
        <div className="login-needed">
          <h4>Log in or sign up to book </h4>
          <LoginFormPage />
        </div>
      </>
    );
  } else
    isLogged = (
      <>
        <Link to={`/reservations/${user.id}`}>
            <button  onClick={handleClick} className="login-button">Reserve Now</button>
        </Link>
      </>
    );

  return (
    <>
      <div className="left-data">
        <h2>Your trip</h2>
      </div>
      <div className="left-data">
        <div className="edit-date">
          <h4>Dates</h4>
          <h4>Edit</h4>
        </div>
        <div>
          <span>
            {MONTH[checkIn.split("-")[1]]} {checkIn.split("-")[2]} -{" "}
            {MONTH[checkOut.split("-")[1]]} {checkOut.split("-")[2]}{" "}
          </span>
        </div>
      </div>
      <div className="left-data">
        <div className="edit-date">
          <h4>Guests </h4>
          <h4>Edit </h4>
        </div>
        <div className="edit-date">
          <span>{guests} guests</span>
        </div>
      </div>
      <div className="login-line"></div>
      <div className="left-data">
        <h2>Choose how to pay</h2>
      </div>
      <div className="left-data">
        <form className="payment-type">
          <div className="pay-radio">
            <h4>Pay full</h4>
            <input type="radio" />
          </div>
          <div className="pay-desc">
            <label>Pay the total ($737.79) now and you're all set.</label>
          </div>
        </form>
      </div>
      <div className="login-line"></div>
      {isLogged}
    </>
  );
}

export default ReservationDataLeft;
