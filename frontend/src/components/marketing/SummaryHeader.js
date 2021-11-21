import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

const SummaryHeader = ({total}) => {
  return (
    <HeaderWrapper>
      <h1>SURVEY SUMMARY</h1>
      <div>Total: {total}</div>
    </HeaderWrapper>
  );
};

export default SummaryHeader;
