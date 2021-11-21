import React, { useState, useEffect } from "react";
import axios from "axios";
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
    background: #005c7d;
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
  const [countries, setCountries] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const myUrl = location.state;

  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios.get("https://restcountries.com/v2/all");
      setCountries(data);
    };

    getCountries();
  }, []);

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
      pageToEdit: myUrl,
    };

    console.log(`Button clicked, came from ${pageToEdit}, survey: `, newSurvey);
    navigate("/thank-you", { state: myUrl });
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
            { name: "male", label: "Male" },
            { name: "female", label: "Female" },
            { name: "other", label: "Other" },
          ]}
          value={gender}
          placeholder="Select Gender"
          onChange={handleGender}
        />
        <SelectOption
          label="Country: "
          data={countries}
          value={country}
          placeholder="Select Country"
          onChange={handleCountry}
        />
        <SelectOption
          label="Experience rating: "
          data={[
            { name: 1, optionLabel: "1" },
            { name: 2, optionLabel: "2" },
            { name: 3, optionLabel: "3" },
            { name: 4, optionLabel: "4" },
            { name: 5, optionLabel: "5" },
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
