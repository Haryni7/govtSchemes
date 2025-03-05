import Grievance from "../models/Grievance.js";

// Submit a new grievance
export const submitGrievance = async (req, res) => {
  try {
    const { name, email, issue, details } = req.body;
    const newGrievance = new Grievance({ name, email, issue, details });
    await newGrievance.save();
    res.status(201).json({ message: "Grievance submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting grievance", error });
  }
};

// Get all grievances
export const getGrievances = async (req, res) => {
  try {
    const grievances = await Grievance.find();
    res.status(200).json(grievances);
  } catch (error) {
    res.status(500).json({ message: "Error fetching grievances", error });
  }
};