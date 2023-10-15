import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomeShowMainRight.css";

function HomeShowMainRight({home}) {
  return (
    <>
      <div className="reserve-box">
        <div className="reserve-price">${home.nightPrice} night</div>
      </div>
    </>
  );
}

export default HomeShowMainRight;
