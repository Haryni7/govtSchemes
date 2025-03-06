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
    schemeName: {
      type: String,
      required: true,
    },
    complaint: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Resolved"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Grievance = mongoose.model("Grievance", GrievanceSchema);
export default Grievance;
