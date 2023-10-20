import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser, getUser } from "../../store/user";

function ReservationIndex() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const userData = useSelector(state=> getUser)

  useEffect(()=>{
    dispatch(fetchUser(userId))
  },[])
  return (
    <>
      <div>Hello There from index</div>
    </>
  );
}

export default ReservationIndex;
