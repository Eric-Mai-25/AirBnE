import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom'
import "./HomeShow.css"


function HomeShow(props){
    const dispatch = useDispatch()
    const {homeId} = useParams()

    return (
        <>
            <h1>{homeId}</h1>
        </>
    )
}

export default HomeShow