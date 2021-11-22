import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const MainWrapper = styled.div`
  text-align: center;
  padding-top: 35vh;

  > h1 {
      color: #6ba410;
  }
`;

const ThankyouScreen = () => {
  const location = useLocation();
  const myUrl = location.state;

  return (
    <MainWrapper style={{ minHeight: 90 + "vh" }} className="container">
      <h1>Thank you very much for your feedback.</h1>
      <p>
        Your response was submitted successfully. <a href={myUrl === '' ? '/' : myUrl}>Return to previous page</a> and continue browsing or
        close tab to exit. Thank you
      </p>
    </MainWrapper>
  );
};

export default ThankyouScreen;
