import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReservationDataRight from "./ReservationDataRight";
import ReservationDataLeft from "./ReservationDataLeft";
import "./ReservationShow.css"

function ReservationShow() {
  const reserveData = JSON.parse(localStorage.getItem("reserve"));

  return (
    <>
      <div className="reservation-page">
        <h2>Confirm and pay</h2>
        <div className="reserve-details">
            <div className="reserve-left">
                <ReservationDataLeft data={reserveData}/>
            </div>
            <div className="reserve-right">
                <ReservationDataRight/>

            </div>
        </div>

      </div>
    </>
  );
}

export default ReservationShow;
