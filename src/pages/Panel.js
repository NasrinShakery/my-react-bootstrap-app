import React from 'react';
import {isLogin} from "./../utils"
import { Navigate } from 'react-router-dom';

const Panel = () => {

  let isUserLogin = isLogin("na")

  return (
    <>
      {isUserLogin ?
        <>
          <div>Panel {console.log(isUserLogin)}</div>
          <h3>{isUserLogin}</h3>
        </>
        : 
        <>
          <Navigate to="/login"/>
        </>}
      
    </>
  )
}

export default Panel;