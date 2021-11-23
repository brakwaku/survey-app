// import surveys from '../data/userSurveys.js';
import asyncHandler from "express-async-handler";
import Survey from "../models/surveyModel.js";

// @desc    Fetch all surveys
// @route   GET /api/surveys
// @access  Public
const getSurveys = asyncHandler(async (req, res) => {
  const surveys = await Survey.find({});

  let tempRating = 0;
  let tempAge = 0;
  let maleCount = 0;
  let femaleCount = 0;
  let otherCount = 0;
  let total = surveys.length;
  let tempCountries = [];
  let countriesArray = [];

  surveys.forEach((item) => {
    tempRating += item.experience;
    tempAge += item.age;

    if (item.gender === "male") {
      maleCount++;
    }

    if (item.gender === "female") {
      femaleCount++;
    }

    if (item.gender === "other") {
      otherCount++;
    }

    countriesArray.push(item.country);
  });

  let unique = [...new Set(countriesArray)];

  for (let i = 0; i < unique.length; i++) {
    let counter = 0;
    for (let j = 0; j < countriesArray.length; j++) {
      if (unique[i] === countriesArray[j]) {
        counter++;
      }
    }
    let oneCountry = { name: unique[i], count: counter };
    tempCountries.push(oneCountry);
    counter = 0;
  }

  // let counts = {};
  // for (let i = 0; i < countriesArray.length; i++) {
  //   counts[countriesArray[i]] = 1 + (counts[countriesArray[i]] || 0);
  // }

  // tempCountries = countriesArray.reduce((acc, val) => {
  //   acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
  //   return acc;
  // }, []);

  /******************************************************
   * Function as parameter to sort objects array in array
   ******************************************************/
  function compareValues(key, order = "asc") {
    return function innerSort(a, b) {
      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  } //End of CompareValues function

  tempCountries.sort(compareValues("count", "desc"));

  const data = {
    calc: {
      averageAge: (tempAge / total).toFixed(0),
      averageRating: (tempRating / total).toFixed(2),
      countries: tempCountries,
      maleCount,
      femaleCount,
      otherCount,
      total,
    },
    surveys,
  };

  res.json(data);
});

// @desc    Fetch survey by Id
// @route   GET /api/surveys/:id
// @access  Public
const getSurveyById = asyncHandler(async (req, res) => {
  const survey = await Survey.findById(req.params.id);
  // const survey = surveys.find(s => s.id === req.params.id)
  if (survey) {
    res.json(survey);
  } else {
    res.status(404);
    throw new Error("No survey data found for ID");
  }
});

// @desc    Create new survey
// @route   POST /api/surveys
// @access  Public
const createSurvey = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    age,
    gender,
    country,
    experience,
    suggestion,
    pageToEdit,
  } = req.body.survey;

  try {
    const survey = new Survey({
      name: name,
      email: email,
      age: age,
      gender: gender,
      country: country,
      experience: experience,
      suggestion: suggestion,
      pageToEdit: pageToEdit,
    });

    const createdSurvey = await survey.save();
    res.status(201).json(createdSurvey);

  } catch (error) {
    res.json(error);
    throw new Error("No survey data found for ID");
  }
});

export { getSurveys, getSurveyById, createSurvey };
