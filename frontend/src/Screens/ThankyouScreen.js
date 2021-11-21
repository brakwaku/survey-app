import React from 'react';
import { useLocation } from "react-router-dom";

const ThankyouScreen = () => {
  const location = useLocation();
  const myUrl = location.state;

    return (
        <div>
            <h1>Thank you very much</h1>
            <p><a href={myUrl}>Return to previous page</a> and continue browsing or close tab to exit. Thank you</p>
        </div>
    )
}

export default ThankyouScreen
