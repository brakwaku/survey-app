import React from "react";
import styled from "styled-components";

// const LogoWrapper = styled.img`
//   max-width: 17%;
//   height: auto;
// `;

const NavWrapper = styled.nav`
    /* background: white !important; */
  div > div > ul > li > a {
      color: #005C7D !important;
  }
`;

const Header = () => {
  return (
    <header>
      <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
              LOGO
            {/* <LogoWrapper
              alt="logo"
              src="//cmsasset.ancestrycdn.com/content/experience-fragments/global-xf/header/global-header/master/_jcr_content/root/responsivegrid/header/logo.coreimg.svg/1626203683654/ancestry.svg"
            /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">GENEALOGY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">DNA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">SIGN IN</a>
              </li>
            </ul>
          </div>
        </div>
      </NavWrapper>
    </header>
  );
};

export default Header;
