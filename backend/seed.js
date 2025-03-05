import mongoose from "mongoose";
import Scheme from "./src/models/Scheme.js"; // Ensure the path is correct
import fs from "fs";

mongoose.connect("mongodb+srv://anretv12:anretv12@cluster0.yzqrp.mongodb.net/GovtSchemes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const seedDatabase = async () => {
  try {
    const data = JSON.parse(fs.readFileSync("schemes.json", "utf-8"));
    await Scheme.insertMany(data);
    console.log("Schemes data seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
};

seedDatabase();
