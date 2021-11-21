import React from "react";
// import styled from "styled-components";
import SurveyLink from "../components/SurveyLink";

// const FormWrapper = styled.form`
//   display: block;
// `;

const HomeScreen = () => {
  return (
    <div>
      <h1>This Is My Home</h1>
      <SurveyLink buttonName='Page Edit Suggestion' />
    </div>
  );
};

export default HomeScreen;
