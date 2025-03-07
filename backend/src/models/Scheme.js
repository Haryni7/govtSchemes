import mongoose from "mongoose";

const SchemeSchema = new mongoose.Schema(
  {
    scheme: {
      type: String,
      required: [true, "Scheme name is required"],
      trim: true,
      unique: true,
      index: true,
    },
    eligibility: {
      age: {
        min: {
          type: String,
          enum: ["Below 18", "18-35", "35-60", "Above 60"],
        },
        max: {
          type: String,
          enum: ["Below 18", "18-35", "35-60", "Above 60"],
        },
      },
      income: {
        min: {
          type: String,
          enum: [
            "Below 1.5 Lakh",
            "1.5-3 Lakhs",
            "3-6 Lakhs",
            "6-12 Lakhs",
            "Above 12 Lakhs",
          ],
        },
        max: {
          type: String,
          enum: [
            "Below 1.5 Lakh",
            "1.5-3 Lakhs",
            "3-6 Lakhs",
            "6-12 Lakhs",
            "Above 12 Lakhs",
          ],
        },
      },
      caste: {
        type: String,
        enum: ["SC", "ST", "OBC", "MBC", "FC", "General", "Others"],
      },
      gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
      },
      education: {
        type: String,
        enum: [
          "Below 8th",
          "8th Pass",
          "10th Pass",
          "12th Pass",
          "Graduate",
          "Postgraduate",
        ],
      },
      maritalStatus: {
        type: String,
        enum: ["Single", "Married", "Divorced", "Widowed"],
      },
      religion: {
        type: String,
        enum: ["Hindu", "Muslim", "Christian", "Sikh", "Other"],
      },
      occupation: {
        type: String,
        enum: [
          "Agriculture",
          "Government Employee",
          "Private Sector",
          "Self-Employed",
          "Unemployed",
          "Student",
        ],
      },
      location: {
        type: String,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Scheme = mongoose.model("Scheme", SchemeSchema);
export default Scheme;
