import express from "express";
import {
  getSchemes,
  getSchemeById,
  getUserSchemes,
} from "../controllers/schemeController.js";

const router = express.Router();

// Route to get all schemes
router.get("/", getSchemes);
router.get("/user", getUserSchemes);

// Route to get a specific scheme by ID
router.get("/schemes/:id", getSchemeById);

export default router;
