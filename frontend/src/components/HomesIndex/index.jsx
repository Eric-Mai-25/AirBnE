import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './HomeIndex.css'

function HomesIndex (props) {
    const dispatch = useDispatch()
    const homes = useSelector()


    useEffect(()=>{
        dispatch()
    },[])
    
    return(
        <>

        </>
    )

}