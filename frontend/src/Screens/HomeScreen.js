import React from "react";
import styled from "styled-components";
import SurveyLink from "../components/SurveyLink";
import backgroundImage from "../assets/descendants.jpg";

const MainWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url(${backgroundImage});
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  padding: 2rem;

  > div > h1 {
    color: white;
    font-weight: bold;
  }
`;

const HomeScreen = () => {
  return (
    <MainWrapper>
      <div className="container">
        <h1>This Is My Home</h1>
        <div>
          <SurveyLink buttonName="Page Edit Suggestion" />
        </div>
      </div>
    </MainWrapper>
  );
};

export default HomeScreen;
