import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import schemeRoutes from "./src/routes/schemeRoutes.js";
import grievanceRoutes from "./src/routes/grievanceRoutes.js";
import connectDB from "./src/config/db.js";

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
connectDB();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
