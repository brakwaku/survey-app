import React from "react";
import styled from "styled-components";
import media from "../utilities/media";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  padding: 1.7rem 0 1.6rem 0;
  margin: 0 auto 0 auto;
  justify-content: center;

  ${media.small`
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    width: 100%;
  `}
`;

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.small`
    flex-direction: column;
    text-align: center;
  `}

  > a {
    text-decoration: none;
    color: #36322d;
    font-size: 0.8rem;

    &:hover {
      color: #238aad;
      text-decoration: underline;
    }
  }

  > h6 {
    font-weight: bolder;
  }
`;

const BelowMainWrapper = styled.div`
  background: #ececec;
  width: 100%;
  margin: 0 auto 0 auto;
  padding: 1rem 0 .5rem 0;
  justify-content: center;

  ${media.small`
    text-align: center;
  `}

  > div {
    margin: 0 auto 1.6rem auto;
    width: 80%;
  }

  > div > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    gap: 16rem;
    color: #36322d;
    font-size: 0.84rem;
    margin: 0 0 1.6rem 0;
    /* justify-content: center; */

    ${media.small`
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    `}
  }

  > div > div > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.6rem;

    ${media.small`
    flex-wrap: wrap;
    text-align: center;
    `}

    > a {
      text-decoration: none;
      color: #36322d;
      font-size: 0.84rem;

      ${media.small`
      font-size: 0.7rem;
        text-align: center;
        flex-wrap: wrap;
      `}

      &:hover {
        color: #238aad;
        text-decoration: underline;
      }
    }
  }

  > div > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    color: #36322d;
    font-size: 0.7rem;
    text-align: left;

    ${media.small`
    flex-wrap: wrap;
    text-align: center;
    `}

    > span {
      text-decoration: none;
      color: #36322d;
      font-size: 0.7rem;
    }

    > a {
      text-decoration: none;
      color: #36322d;
      font-size: 0.7rem;

      &:hover {
        color: #238aad;
        text-decoration: underline;
      }
    }
  }
`;

const Footer = () => {
  return (
    <footer style={{ background: "#F0EEE9"}}>
      <MainWrapper>
        <ColWrapper>
          <h6>Genealogy Resources</h6>
          <a href="/">Surname Meanings</a>
          <a href="/">Historical Person Search</a>
          <a href="/">Genealogy</a>
          <a href="/">Obituaries</a>
          <a href="/">Women's Suffrage</a>
        </ColWrapper>
        <ColWrapper>
          <h6>Historical Collections</h6>
          <a href="/">Vital Records</a>
          <a href="/">Search Public Trees</a>
          <a href="/">Military Records</a>
          <a href="/">All Records</a>
        </ColWrapper>
        <ColWrapper>
          <h6>Family Trees</h6>
          <a href="/">Create a Family Tree</a>
          <a href="/">Pedigree Charts</a>
          <a href="/">Search Public Trees</a>
        </ColWrapper>
      </MainWrapper>
      <BelowMainWrapper>
        <div>
          <div>
            <div>
              <a href="/">Support Center</a>
              <a href="/">Ancestry Blog</a>
              <a href="/">Site Map</a>
              <a href="/">Gift Memberships</a>
              <a href="/">Careers</a>
            </div>
            <div>
              <label>Visit our other sites: &#8194;</label>
              <select>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada (English)</option>
              </select>
            </div>
          </div>
          <div>
            <span href="/">© 1997-2021 Ancestry</span> &#8729;
            <a href="/">Corporate Information</a> &#8729;
            <a href="/">Privacy</a> &#8729;
            <a href="/">Terms and Conditions</a> &#8729;
            <a href="/">CCPA Notice at Collection</a> &#8729;
            <a href="/">Patent</a>
          </div>
        </div>
      </BelowMainWrapper>
    </footer>
  );
};

export default Footer;
