import React from "react";
import sampleHotel from "../../../assets/hotels/hotel-1.jpeg";
import "./HomeIndexItem.css";
import { AiFillStar } from "react-icons/ai";

function HomeIndexItem({ data }) {
  return (
    <>
      <div className="card">
        <img src={sampleHotel} className="card-img" />
        <div className="card-info">
          <p className="card-title">Place</p>
          <div className="card-rating">
            <AiFillStar />
            <p>4.00</p>
          </div>
        </div>
        <div className="card-info">
            <p className="">30 miles away</p>
        </div>
        <div className="card-info ">
            <p>$200 night</p>
        </div>
      </div>
    </>
  );
}

export default HomeIndexItem;
