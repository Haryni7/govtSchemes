import express from "express";
import { getSchemes, getSchemeById } from "../controllers/schemeController.js";

const router = express.Router();

// Route to get all schemes
router.get("/", getSchemes);

// Route to get a specific scheme by ID
router.get("/:id", getSchemeById);

export default router;
