import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import schemeRoutes from "./src/routes/schemeRoutes.js"
import grievanceRoutes from "./src/routes/grievanceRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/schemes", schemeRoutes);
app.use("/api/grievances", grievanceRoutes);

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

connectDB();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});