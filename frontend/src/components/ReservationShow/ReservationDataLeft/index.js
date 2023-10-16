import { useState } from "react";

function ReservationDataLeft({data}) {


    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [guests, setGuests] = useState(data.guests)

  return (
    <>
      <div> Hello from left</div>
      <div className="left-data">
        <h2>Your trip</h2>
      </div>
      <div className="left-data">
        <span>Dates</span>
      </div>
      <div className="left-data">
        <span>Guests</span>
        <span>{guests}</span>
      </div>
      <div className="left-data">
        <h2>Choose how to pay</h2>
      </div>
      <div className="left-data">
        <form>
          <label>Free</label>
          <input type="radio"/>
        </form>
      </div>
      <div className="left-data">
        <button>Reserve Now</button>
      </div>
    </>
  );
}

export default ReservationDataLeft;
