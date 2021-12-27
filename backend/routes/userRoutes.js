import express from "express";
const router = express.Router();
import {
  authUser
} from "../controllers/userController.js";

// router.route("/").get(getSurveys).post(createSurvey);
router.route("/signin").post(authUser);

export default router;
