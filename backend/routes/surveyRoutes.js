import express from "express";
const router = express.Router();
import {
  getSurveys,
  getSurveyById,
  createSurvey,
} from "../controllers/surveyController.js";

router.route("/").get(getSurveys).post(createSurvey);
router.route("/:id").get(getSurveyById);

export default router;
