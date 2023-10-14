import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import home1 from "../../../../assets/hotels/hotel-1.jpeg";
import home2 from "../../../../assets/hotels/hotel-2.jpeg";
import home3 from "../../../../assets/hotels/hotel-3.jpeg";
import home4 from "../../../../assets/hotels/hotel-4.jpeg";
import home5 from "../../../../assets/hotels/hotel-5.jpeg";
import "./HomeShowImages.css";

function HomeShowImages(props) {
  return (
    <>
      <div className="image-box">
        <div className="image-left">
          <img src={home1} />
        </div>
        <div className="images-right">
          <div className="row">
            <img src={home2} />
            <img className="far-top-right" src={home3} />
          </div>
          <div className="row">
            <img src={home4} />
            <img className="far-bot-right" src={home5} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeShowImages;
