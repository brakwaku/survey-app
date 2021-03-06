import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import media from "../utilities/media";


const SurveyLink = ({ buttonName }) => {
  const myUrl = window.location.pathname;

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/survey", { state: myUrl });
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


const LinkWrapper = styled.form`
  display: block;
  margin: 2rem;

  ${media.small`
    width: 100%;
  `}

  > button {
    background: #6ba410;
    color: white;
    border: none;
    font-weight: bold;

    &:hover {
      background: #42860e;
    }
  }
`;