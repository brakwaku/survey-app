import React, { useState, useEffect } from "react";
import axios from "axios";
import SurveyLink from "../components/SurveyLink";
import styled from "styled-components";
import SummaryHeader from "../components/marketing/SummaryHeader";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 1.6rem;
  width: 80%;
`;

const GridItemWrapper = styled.div`
  text-align: center;
`;

const HeadingWrapper = styled.div`
  width: 80%;
`;

const SurveySummaryScreen = () => {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [averageAge, setAverageAge] = useState(0);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  
  useEffect(() => {
    const fetchSurveys = async () => {
      const { data } = await axios.get("/api/surveys");
      setSurveys(data);
      setTotal(data.length);
      
      let tempRating = 0;
      let tempAge = 0;
      let tempMaleCount = 0;
      let tempFemaleCount = 0;
      let tempOtherCount = 0;
      data.forEach((item) => {
        tempRating += item.experience
        tempAge += item.age

        if(item.gender === 'male') {
          tempMaleCount++;
        }

        if(item.gender === 'female') {
          tempFemaleCount++;
        }

        if(item.gender === 'other') {
          tempOtherCount++;
        }
      })
      
      setAverageRating((tempRating / total).toFixed(2));
      setAverageAge((tempAge / total).toFixed(0));
      setMaleCount(tempMaleCount);
      setFemaleCount(tempFemaleCount);
      setOtherCount(tempOtherCount);
      setLoading(false);
    };

    fetchSurveys();
  }, [total]);
  return (
    <div>
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <HeadingWrapper>
              <SummaryHeader total={total} />
            </HeadingWrapper>

            <GridWrapper>
              <GridItemWrapper>
                <h5>Average Age</h5>
                <h4>{averageAge}</h4>
              </GridItemWrapper>
              <GridItemWrapper>
                <h5>Average Rating</h5>
                <h4>{averageRating}</h4>
              </GridItemWrapper>
              <GridItemWrapper>
                <h5>Gender Distribution</h5>
                <h4>Male: {maleCount}</h4>
                <h4>Female: {femaleCount}</h4>
                <h4>Other: {otherCount}</h4>
              </GridItemWrapper>
              <GridItemWrapper>
                <h5>Country Distribution</h5>
                <h4>{surveys[0].country}</h4>
              </GridItemWrapper>
            </GridWrapper>
          </>
          // surveys.map((survey) => <h1 key={survey.id}>{survey.name}</h1>)
        )}

        <SurveyLink buttonName="Take Survey" />
      </div>
    </div>
  );
};

export default SurveySummaryScreen;
