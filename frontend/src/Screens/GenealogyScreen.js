import React from "react";
import SurveyLink from "../components/SurveyLink";

const GenealogyScreen = () => {
  return (
    <div className="container">
      <div style={{ minHeight: 80 + "vh" }}>
        <h1>This is the GENEALOGY Link Page</h1>
      </div>
      <SurveyLink buttonName="Page Edit Suggestion" />
    </div>
  );
};

export default GenealogyScreen;
