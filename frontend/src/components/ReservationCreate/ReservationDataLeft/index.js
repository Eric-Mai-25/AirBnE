import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../../../store/reserve";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ReservationDataLeft({ data }) {
  const dispatch = useDispatch();
  const { homeId } = useParams();
  const user = useSelector(state=> state.session.user.id)
  const [checkIn, setCheckIn] = useState(data.checkIn);
  const [checkOut, setCheckOut] = useState(data.checkOut);
  const [guests, setGuests] = useState(data.guests);
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    const reserveData = {
      check_in_date: checkIn,
      check_out_date: checkOut,
      guests: guests,
      home_id: homeId,
      guest_id: user,
      reservation_status : 'pending'
    };
    dispatch(createReservation(reserveData));
    history.push('/')
  };

  return (
    <>
      <div> Hello from left</div>
      <div className="left-data">
        <h2>Your trip</h2>
      </div>
      <div className="left-data">
        <span>Dates</span>
        <span>
          {checkIn} - {checkOut}{" "}
        </span>
      </div>
      <div className="left-data">
        <span>Guests </span>
        <span>{guests}</span>
      </div>
      <div className="left-data">
        <h2>Choose how to pay</h2>
      </div>
      <div className="left-data">
        <form>
          <label>Free</label>
          <input type="radio" />
        </form>
      </div>
      <form onSubmit={handleSubmit} className="left-data">
        <input type="submit" value="Reserve Now" />
      </form>
    </>
  );
}

export default ReservationDataLeft;
