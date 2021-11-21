import React from "react";
import styled from "styled-components";

const NavWrapper = styled.header`
  nav > div > div > div > a {
    color: #005c7d !important;
  }
`;

const Header = () => {
  return (
    <NavWrapper>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              alt="logo"
              src="//cmsasset.ancestrycdn.com/content/experience-fragments/global-xf/header/global-header/master/_jcr_content/root/responsivegrid/header/logo.coreimg.svg/1626203683654/ancestry.svg"
              height="26"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" aria-current="page" href="/genealogy">
                GENEALOGY
              </a>
              <a className="nav-link" href="/dna">
                DNA
              </a>
              <a className="nav-link" href="/survey-summary">
                SUMMARY
              </a>
              <a className="nav-link" href="/">
                SIGN IN
              </a>
            </div>
          </div>
        </div>
      </nav>
    </NavWrapper>
  );
};

export default Header;
