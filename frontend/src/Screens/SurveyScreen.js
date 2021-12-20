import React from "react";
import SurveyForm from "../components/SurveyForm";
import styled from "styled-components";
import media from "../utilities/media";

const SurveyScreen = () => {
  return (
    <div style={{ minHeight: 90 + "vh" }}  className="container">
      <MainWrapper>
        <h1>Page Edit Suggestion</h1>
        <hr/>
        <SurveyForm />
      </MainWrapper>
    </div>
  );
};

export default SurveyScreen;

const MainWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  border-radius: 6px;
  box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.1), 1px 3px 3px 0 rgba(0, 0, 0, 0.1);

  ${media.small`
    > h1 {
        font-size: 1.5rem;
    }
  `}
`;
