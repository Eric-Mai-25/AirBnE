import React, { useEffect, useState } from "react";
import "./HomeShowImages.css";

function HomeShowImages({home}) {

  if (!home) return null
  return (
    <>
      <div className="image-box">
        <div className="image-left">
          <img src={home.photoUrls[0]} />
        </div>
        <div className="images-right">
          <div className="row">
            <img src={home.photoUrls[1]} />
            <img className="far-top-right" src={home.photoUrls[2]} />
          </div>
          <div className="row">
            <img src={home.photoUrls[3]} />
            <img className="far-bot-right" src={home.photoUrls[4]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeShowImages;
