import React from "react";
import SurveyLink from "../components/SurveyLink";

const InternalErrorScreen = () => {
  return (
    <div className="container">
      <div className="pt-5" style={{ minHeight: 80 + "vh" }}>
        <h1>Sorry for the inconviniences</h1>
        <p>
          We are currently experiencing some problems which will be resolved
          shortly. Please come back later. Thank you
        </p>
      </div>
      <SurveyLink buttonName="Page Edit Suggestion" />
    </div>
  );
};

export default InternalErrorScreen;
