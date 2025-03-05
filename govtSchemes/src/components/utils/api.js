import axios from "axios";

const API_URL = "https://api.example.com/schemes"; // Replace with actual API endpoint

export const fetchSchemes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching schemes:", error);
    return [];
  }
};

export const submitGrievance = async (grievanceData) => {
  try {
    const response = await axios.post(`${API_URL}/grievances`, grievanceData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting grievance:", error);
    return null;
  }
};