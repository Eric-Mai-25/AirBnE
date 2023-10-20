import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { TbMoneybag } from "react-icons/tb";
import { GoShare } from "react-icons/go";

import "./HomeTop.css";

function HomeTop({ home, rating, numReview }) {
  const isSuper = true;

  return (
    <>
      <div className="header-box">
        <h1 className="header-title">{home.title}</h1>
        <div className="header-rating">
          <div className="header-left">
            {rating !== "NaN" ? (
              <>
                <AiFillStar />
                <span>{rating} ·</span>
              </>
            ) : null}
            <span>{numReview} Reviews</span>
            {isSuper ? <span>· </span> : null}
            {isSuper ? <TbMoneybag /> : null}
            {isSuper ? <span>Superhost</span> : null}
            <span>· {home.city},</span>
            <span>{home.state},</span>
            <span>{home.country}</span>
          </div>
          <div className="header-right">
            <span>
              <GoShare />
              <span>Share</span>
            </span>
            <span>
              <AiOutlineHeart />
              <span className="header-save">Save</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTop;
