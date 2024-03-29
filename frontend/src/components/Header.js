import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <NavWrapper>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              alt="logo"
              src="https://www.logolynx.com/images/logolynx/b4/b4c97628f16c4405260a40f8971c9294.png"
              height="33"
              className="d-inline-block align-text-top"
            />
          </Link>
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
              <Link className="nav-link" aria-current="page" to="/genealogy">
                GENEALOGY
              </Link>
              <Link className="nav-link" to="/dna">
                DNA
              </Link>
              <Link className="nav-link" to="/survey-summary">
                SUMMARY
              </Link>
              <Link className="nav-link" to="/signin">
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </NavWrapper>
  );
};

export default Header;

const NavWrapper = styled.header`
  nav > div > div > div > a {
    color: #005c7d !important;
  }

  > nav {
    padding: 0.2rem !important;
  }
`;
