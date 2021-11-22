import React from "react";
import SurveyLink from "../components/SurveyLink";

const DnaScreen = () => {
  return (
    <div className="container">
      <div style={{ minHeight: 80 + "vh" }}>
        <h1>This is the DNA Link Page</h1>
      </div>
      <SurveyLink buttonName="Page Edit Suggestion" />
    </div>
  );
};

export default DnaScreen;
