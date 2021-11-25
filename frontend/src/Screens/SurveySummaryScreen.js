import React, { useState, useEffect } from "react";
import axios from "axios";
import SurveyLink from "../components/SurveyLink";
import styled from "styled-components";
import SummaryHeader from "../components/marketing/SummaryHeader";
import SummaryItem from "../components/marketing/SummaryItem";
import media from "../utilities/media";
import CountriesModal from "../components/marketing/CountriesModal";
import PieCharf from "../components/marketing/PieCharf";

const MainWrapper = styled.div`
  justify-content: center;
  margin: 0 auto 0 auto;
  min-height: 90vh;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 1.6rem;
  width: 95%;
  margin: 0 auto 0 auto;

  ${media.medium`
    display: flex;
    flex-direction: column;
    width: 100%;
  `}
`;

const HeadingWrapper = styled.div`
  width: 95%;
  margin: .7rem auto 0 auto;

  ${media.medium`
    width: 100%;
    margin-top: 1rem;
  `}
`;

const SurveySummaryScreen = () => {
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [averageAge, setAverageAge] = useState(0);
  const [countries, setCountries] = useState({});
  const [genderData, setGenderData] = useState({});

  useEffect(() => {
    const fetchSurveys = async () => {
      const { data } = await axios.get("/api/surveys");
      setTotal(data.calc.total);
      setAverageRating(data.calc.averageRating);
      setAverageAge(data.calc.averageAge);
      setGenderData(data.calc.gender);
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
                <h5>Average Age</h5><hr/>
                <h4>{averageAge} years</h4>
              </SummaryItem>
              <SummaryItem color="green">
                <h5>Average Rating</h5><hr/>
                <h4>{averageRating} / 5</h4>
              </SummaryItem>
              <SummaryItem color="green">
              <h5>Gender Distribution</h5><hr/>
                {/* {genderData.map((gender, key) => (
                  <h4 key={key}>{gender.name[0].toUpperCase() + gender.name.substring(1)}: {gender.count}</h4>
                ))} */}
                <PieCharf data={genderData} chartType='doughnut' labelColor='white' canvasId='genderChart'/>
              </SummaryItem>
              <SummaryItem color="footer">
                <h5>Country Distribution</h5><hr/>
                <CountriesModal countries={countries} />
                <PieCharf data={countries} chartType='bar' graphTitle='Country Distribution' labelColor='black' canvasId='countriesChart'/>
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
