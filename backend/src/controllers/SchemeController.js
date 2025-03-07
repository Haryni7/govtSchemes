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
    const scheme = await Scheme.findById(req.params.id).lean();
    if (!scheme) {
      return res.status(404).json({ message: "Scheme not found" });
    }
    console.log("Full scheme data:", scheme); // Debug log
    res.status(200).json(scheme);
  } catch (error) {
    console.error("Error details:", error); // Debug log
    res
      .status(500)
      .json({ message: "Error fetching scheme", error: error.message });
  }
};

export const getUserSchemes = async (req, res) => {
  try {
    const {
      age,
      income,
      caste,
      gender,
      education,
      maritalStatus,
      religion,
      occupation,
      // location,
    } = req.query;

    // Dynamically build query object
    let query = {};

    if (age) query["eligibility.age.min"] = age;
    if (income) query["eligibility.income.min"] = income;
    if (caste) query["eligibility.caste"] = caste;
    if (gender) query["eligibility.gender"] = gender;
    if (education) query["eligibility.education"] = education;
    if (maritalStatus) query["eligibility.maritalStatus"] = maritalStatus;
    if (religion) query["eligibility.religion"] = religion;
    if (occupation) query["eligibility.occupation"] = occupation;
    // if (location) query["eligibility.location"] = { $in: [location] };

    const schemes = await Scheme.find(query);

    console.log(`Found ${schemes.length} schemes.`);
    res.status(200).json(schemes);
  } catch (error) {
    console.error("Error fetching schemes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
