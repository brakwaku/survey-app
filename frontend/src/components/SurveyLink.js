import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = styled.form`
  display: block;

  > button {
    background: #6ba410;
    color: white;
    border: none;

    &:hover {
      background: #42860e;
    }
  }
`;

const SurveyLink = ({ buttonName }) => {
  const myUrl = window.location.pathname;
  //   const myUrl = window.location.href;

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("The url: ", myUrl);
    navigate("/survey", {state: myUrl});
  };
  return (
    <LinkWrapper onSubmit={onSubmit}>
      <input hidden defaultValue={myUrl} />
      <button type="submit" className="btn btn-primary">
        {buttonName}
      </button>
    </LinkWrapper>
  );
};

export default SurveyLink;
