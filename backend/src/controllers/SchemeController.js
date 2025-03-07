import Scheme from "../models/Scheme.js";

// Get all schemes
export const getSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find();
    // console.log(schemes);
    res.status(200).json(schemes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schemes", error });
  }
};

// Get a scheme by ID
export const getSchemeById = async (req, res) => {
  try {
    const scheme = await Scheme.findById(req.params.id);
    if (!scheme) {
      return res.status(404).json({ message: "Scheme not found" });
    }
    res.status(200).json(scheme);
  } catch (error) {
    res.status(500).json({ message: "Error fetching scheme", error });
  }
};

export const getUserSchemes = async (req, res) => {
  console.log("Query Params:", req.query);
  const {
    age,
    income,
    caste,
    gender,
    education,
    maritalStatus,
    religion,
    occupation,
    location,
  } = req.query;
  try {
    const query = {
      $and: [
        age ? { "Eligibility.age": age } : {},
        income ? { "Eligibility.income": income } : {},
        caste ? { "Eligibility.caste": caste } : {},
        gender ? { "Eligibility.gender": gender } : {},
        education ? { "Eligibility.education": education } : {},
        maritalStatus ? { "Eligibility.maritalStatus": maritalStatus } : {},
        religion ? { "Eligibility.religion": religion } : {},
        occupation ? { "Eligibility.occupation": occupation } : {},
        location ? { "Eligibility.location": location } : {},
      ].filter((condition) => Object.keys(condition).length > 0),
    };

    console.log("Constructed Query:", JSON.stringify(query, null, 2));
    const schemes = await Scheme.find(query);
    console.log("Schemes Found:", schemes);

    if (schemes.length === 0) {
      return res.status(404).json({ message: "No schemes found" });
    }
    res.status(200).json({ schemes });
  } catch (error) {
    console.error("Error fetching schemes:", error);
    res.status(500).json({ message: "Error fetching schemes", error });
  }
};
