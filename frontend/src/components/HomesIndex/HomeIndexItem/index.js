import React from "react";
import sampleHotel from "../../../assets/hotels/hotel-1.jpeg";
import "./HomeIndexItem.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function HomeIndexItem({ home }) {
  const handleCardClick = e =>{
    
  }
  if(!home) return (<div>loading</div>)
  
  return (
    <>
      <Link to={`/homes/${home.id}`} className="card">
        <img src={home.photoUrls[0]} className="card-img" />
        <div className="card-info">
          <p className="card-title">{home.city} , {home.state}</p>
          <div className="card-rating">
            <AiFillStar />
            <p>{(Math.random() * 4 + 1).toFixed(1)}</p>
          </div>
        </div>
        <div className="card-info">
            <p className="card-distance">{home.title}</p>
        </div>
        <div className="card-info-price">
            <p className="card-price">${home.nightPrice}</p>
            <p>night</p>
        </div>
      </Link>
    </>
  );
}

export default HomeIndexItem;
