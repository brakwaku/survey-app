import React from "react";
import styled from "styled-components";
import media from "../../utilities/media";

const SummaryHeader = ({ total }) => {
  return (
    <HeaderWrapper>
      <h1>SURVEY SUMMARY</h1>
      <a href="/survey-summary">Total: {total}</a>
    </HeaderWrapper>
  );
};

export default SummaryHeader;


const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0.7rem;
  border-radius: 6px;
  align-items: stretch;

  > h1 {
    text-align: center;
    flex-grow: 8;
  }

  > a {
    background: #0079a3;
    border-radius: 6px;
    padding: 0.3rem;
    font-size: 1.7rem;
    font-weight: bold;
    color: white;
    flex-grow: 2;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.3), 0 3px 3px 0 rgba(0, 0, 0, 0.1);

    &:hover {
      background: #31630b;
    }
  }

  ${media.small`
    width: 100%;
    gap: 2rem;
    padding: 0.3rem;
    > h1 {
      font-size: 1.5rem;
    }
    > a {
      font-size: 1rem;
    }
  `}
`;