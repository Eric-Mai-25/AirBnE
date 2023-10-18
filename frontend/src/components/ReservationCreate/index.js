import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReservationDataRight from "./ReservationDataRight";
import ReservationDataLeft from "./ReservationDataLeft";
import { BsChevronLeft } from "react-icons/bs";
import "./ReservationShow.css";
import { useParams } from "react-router-dom";

function ReservationCreate() {
  const { homeId } = useParams();
  const statedata = useSelector((state) => state.reservations.reserveData);
  // const statedata = useSelector((state) => console.log(state));
  // const reserveData = JSON.parse(localStorage.getItem("reserve"));
  console.log(statedata)
  if (!statedata) return <div>Loading</div>;
  return (
    <>
      <div className="reservation-page">
        <div className="reserve-title">
          <Link to={`/homes/${homeId}`} className="back-link">
            <BsChevronLeft className="back-button" />
          </Link>
          <h1 className="header-reserve">Request to book</h1>
        </div>
        <div className="reserve-details">
          <div className="reserve-left">
            <ReservationDataLeft data={statedata} />
          </div>
          <div className="reserve-right">
            <ReservationDataRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReservationCreate;
