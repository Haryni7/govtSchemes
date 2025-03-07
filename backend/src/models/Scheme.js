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
          default: null,
        },
        max: {
          type: String,
          enum: ["Below 18", "18-35", "35-60", "Above 60"],
          default: null,
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
          default: null,
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
          default: null,
        },
      },
      caste: {
        type: String,
        enum: ["SC", "ST", "OBC", "MBC", "FC", "General", "Others"],
        default: null,
      },
      gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        default: null,
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
        default: null,
      },
      maritalStatus: {
        type: String,
        enum: ["Single", "Married", "Divorced", "Widowed"],
        default: null,
      },
      religion: {
        type: String,
        enum: ["Hindu", "Muslim", "Christian", "Sikh", "Other"],
        default: null,
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
        default: null,
      },
      location: {
        type: String, // Fixed: Proper array type
        trim: true,
        
      },
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// ✅ Fixed eligibilitySummary Virtual
SchemeSchema.virtual("eligibilitySummary").get(function () {
  return `Age: ${this.eligibility.age.min || "N/A"} - ${
    this.eligibility.age.max || "N/A"
  }, Income: ${this.eligibility.income.min || "N/A"} - ${
    this.eligibility.income.max || "N/A"
  }, Caste: ${this.eligibility.caste || "N/A"}, Gender: ${
    this.eligibility.gender || "N/A"
  }`;
});

// ✅ Fixed Indexing (Avoid redundant indexes)
SchemeSchema.index({
  "eligibility.age.min": 1,
  "eligibility.age.max": 1,
  "eligibility.income.min": 1,
});

const Scheme = mongoose.model("Scheme", SchemeSchema);
export default Scheme;
