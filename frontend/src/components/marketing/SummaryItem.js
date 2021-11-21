import React from "react";
import styled from "styled-components";

const SummaryItem = ({ backgroungColor, hoverColor }) => {
  const ItemWrapper = styled.div`
    text-align: center;
    background: red;
  `;

  return <ItemWrapper></ItemWrapper>;
};

export default SummaryItem;
