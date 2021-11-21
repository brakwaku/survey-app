import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { validators } from "../utilities/Validator";
import InputField from "./InputField";
import SelectOption from "./SelectOption";

const SurveyContentWrapper = styled.div`
  /* background: #141d25; */
`;

const ButtonWrapper = styled.button`
  display: block;
  background: #0079a3;
  color: white;
  border: none;

  &:hover {
    background: #005C7D;
  }
`;

const SurveyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [experience, setExperience] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [pageToEdit, setPageToEdit] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const myUrl = location.state;

  const submitHandler = async (e) => {
    e.preventDefault();

    const newSurvey = {
      id: Math.floor(Math.random()),
      name: name,
      email: email,
      age: age,
      gender: gender,
      country: country,
      experience: experience,
      suggestion: suggestion,
      pageToEdit: pageToEdit,
    };

    console.log("Button clicked", newSurvey);
    navigate("/thank-you", {state: myUrl});
  };

  const handleName = (name) => setName(name);
  const handleEmail = (email) => setEmail(email);
  const handleAge = (age) => setAge(age);
  const handleGender = (gender) => setGender(gender);
  const handleCountry = (country) => setCountry(country);
  const handleExperience = (experience) => setExperience(experience);
  const handleSuggestion = (suggestion) => setSuggestion(suggestion);

  return (
    <SurveyContentWrapper>
      <form onSubmit={submitHandler}>
        <InputField
          value={name}
          label="Name: "
          placeholder="Please enter your full name"
          type="text"
          required
          validators={[
            { check: validators.required, message: "This field is required" },
          ]}
          onChange={handleName}
        />
        <InputField
          value={email}
          label="Email: "
          placeholder="Please enter your email address"
          type="email"
          required
          validators={[
            {
              check: validators.email,
              message:
                "This field is required and should be a valid email address",
            },
          ]}
          onChange={handleEmail}
        />
        <InputField
          value={age}
          label="Age: "
          placeholder="Please enter your age in years"
          type="number"
          validators={[
            { check: validators.number, message: "This field is required" },
          ]}
          onChange={handleAge}
        />
        <SelectOption
          label="Gender: "
          data={[
            { value: 1, optionLabel: "Male" },
            { value: 2, optionLabel: "Female" },
            { value: 3, optionLabel: "Other" },
          ]}
          value={gender}
          placeholder="Select Gender"
          onChange={handleGender}
        />
        <SelectOption
          label="Country: "
          data={[
            { value: 1, optionLabel: "Male" },
            { value: 2, optionLabel: "Female" },
            { value: 3, optionLabel: "Other" },
          ]}
          value={country}
          placeholder="Select Country"
          onChange={handleCountry}
        />
        <SelectOption
          label="Experience: "
          data={[
            { value: 1, optionLabel: "1" },
            { value: 2, optionLabel: "2" },
            { value: 3, optionLabel: "3" },
            { value: 4, optionLabel: "4" },
            { value: 5, optionLabel: "5" },
          ]}
          value={experience}
          placeholder="Select experience rating"
          onChange={handleExperience}
        />
        <InputField
          value={suggestion}
          label="Suggestion: "
          placeholder="Please enter your suggestions here"
          type="textarea"
          onChange={handleSuggestion}
        />
        <input
          type="text"
          id="previousLink"
          name="previousLink"
          defaultValue={location.state}
          hidden
          onLoad={(e) => {
            setPageToEdit(e.target.value);
          }}
        />

        <ButtonWrapper type="submit" className="btn btn-primary">
          Submit
        </ButtonWrapper>
      </form>
    </SurveyContentWrapper>
  );
};

export default SurveyForm;
