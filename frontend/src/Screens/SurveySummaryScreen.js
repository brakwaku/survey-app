import React, { useState, useEffect } from "react";
import axios from "axios";
import SurveyLink from "../components/SurveyLink";
import styled from "styled-components";
import SummaryHeader from "../components/marketing/SummaryHeader";
import SummaryItem from "../components/marketing/SummaryItem";
import media from "../utilities/media";
import CountriesModal from "../components/marketing/CountriesModal";

const MainWrapper = styled.div`
  justify-content: center;
  margin: auto;
  height: 90vh;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 1.6rem;
  width: 80%;

  ${media.small`
    display: flex;
    flex-direction: column;
    width: 100%;
  `}
`;

const HeadingWrapper = styled.div`
  width: 80%;

  ${media.small`
    width: 100%;
    margin-top: 1rem;
  `}
`;

const SurveySummaryScreen = () => {
  // const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [averageAge, setAverageAge] = useState(0);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const [countries, setCountries] = useState({});

  useEffect(() => {
    const fetchSurveys = async () => {
      const { data } = await axios.get("/api/surveys");
      // setSurveys(data.surveys);
      setTotal(data.calc.total);
      setAverageRating(data.calc.averageRating);
      setAverageAge(data.calc.averageAge);
      setMaleCount(data.calc.maleCount);
      setFemaleCount(data.calc.femaleCount);
      setOtherCount(data.calc.otherCount);
      setCountries(data.calc.countries);

      setLoading(false);
    };

    fetchSurveys();
  }, []);
  return (
    <div className="container">
      <MainWrapper>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <HeadingWrapper>
              <SummaryHeader total={total} />
            </HeadingWrapper>

            <GridWrapper>
              <SummaryItem color="blue">
                <h5>Average Age</h5>
                <h4>{averageAge}</h4>
              </SummaryItem>
              <SummaryItem color="green">
                <h5>Average Rating</h5>
                <h4>{averageRating}</h4>
              </SummaryItem>
              <SummaryItem color="green">
                <h5>Gender Distribution</h5>
                <h4>Male: {maleCount}</h4>
                <h4>Female: {femaleCount}</h4>
                <h4>Other: {otherCount}</h4>
              </SummaryItem>
              <SummaryItem color="footer">
                <h5>Country Distribution</h5>
                <CountriesModal countries={countries} />
              </SummaryItem>
            </GridWrapper>
          </>
        )}

        <SurveyLink buttonName="Page Edit Suggestion" />
      </MainWrapper>
    </div>
  );
};

export default SurveySummaryScreen;
