import React, { useState, useEffect } from "react";
import axios from "axios";
import SurveyLink from "../components/SurveyLink";

const SurveySummaryScreen = () => {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurveys = async () => {
      const { data } = await axios.get("/api/surveys");
      setSurveys(data)
      setLoading(false)
    };

    fetchSurveys();
  }, []);
  return (
    <div>
      {loading ? (<h2>Loading...</h2>) : (
          surveys.map((survey) => (
          <h1 key={survey.id}>{survey.name}</h1>
          )))}

        <SurveyLink buttonName='Take Survey' />
    </div>
  );
};

export default SurveySummaryScreen;
