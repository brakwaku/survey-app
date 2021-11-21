import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const ThankyouScreen = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const myUrl = location.state;

  const clickHandler = (e) => {
      e.preventDefalut();
      navigate(myUrl)
  }
    return (
        <div>
            <h1>Thank you very much</h1>
            <p><a href={myUrl} onClick={clickHandler}>Return to previous page</a> and continue browsing or close tab. Thank you</p>
        </div>
    )
}

export default ThankyouScreen
