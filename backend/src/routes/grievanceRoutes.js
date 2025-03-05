import express from "express";
import { submitGrievance, getGrievances } from "../controllers/grievanceController.js";

const router = express.Router();

// Route to submit a grievance
router.post("/submit", submitGrievance);

// Route to get all grievances
router.get("/", getGrievances);

export default router;