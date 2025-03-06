import mongoose from "mongoose";

const GrievanceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    complaint: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Grievance = mongoose.model("Grievance", GrievanceSchema);
export default Grievance;
