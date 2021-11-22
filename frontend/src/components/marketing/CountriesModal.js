import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background: #0079a3;
  font-weight: bold;

  &:hover {
      background: #005c7d;
    }
`;


const CountryListWrapper = styled.div`
  background: #6ba410;
  display: flex;
  flex-direction: row;
  margin-bottom: .4rem;
  padding: .3rem;
  border-radius: 3px;
  color: white;
  font-weight: bold;

  > span:nth-child(1) {
      flex-grow: 2;
  }

  &:hover {
      background: #42860e;
  }
`;

const CountriesModal = ({ countries }) => {
  return (
    <>
      <ButtonWrapper
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#Mylargemodal"
      >
        View distribution
      </ButtonWrapper>
      <div
        className="modal fade"
        id="Mylargemodal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Survey Countries Distribution
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {countries.map((country, key) => (
                <CountryListWrapper key={key}>
                  <span>{country.name}:</span> <span>{country.count}</span>
                </CountryListWrapper>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountriesModal;
