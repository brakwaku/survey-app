// import surveys from '../data/userSurveys.js';
// import fs from 'fs';
import asyncHandler from "express-async-handler";
import Survey from "../models/surveyModel.js";

// @desc    Fetch all surveys
// @route   GET /api/surveys
// @access  Public
const getSurveys = asyncHandler(async (req, res) => {
  const surveys = await Survey.find({});
  res.json(surveys);
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
});

export { getSurveys, getSurveyById, createSurvey };
