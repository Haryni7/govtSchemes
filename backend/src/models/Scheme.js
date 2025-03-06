import mongoose from "mongoose";

const SchemeSchema = new mongoose.Schema(
  {
    scheme: {
      // Renamed to lowercase for consistency
      type: String,
      required: [true, "Scheme name is required"],
      trim: true, // Removes leading/trailing whitespace
      unique: true, // Ensures no duplicate scheme names
      index: true, // Improves query performance on scheme name
    },
    eligibility: {
      age: {
        min: {
          type: String,
          enum: {
            values: ["Below 18", "18-35", "35-60", "Above 60", null],
            message: "{VALUE} is not a valid age range for min",
          },
          default: null,
        },
        max: {
          type: String,
          enum: {
            values: ["Below 18", "18-35", "35-60", "Above 60", null],
            message: "{VALUE} is not a valid age range for max",
          },
          default: null,
        },
      },
      income: {
        min: {
          type: String,
          enum: {
            values: [
              "Below 1.5 Lakh",
              "1.5-3 Lakhs",
              "3-6 Lakhs",
              "6-12 Lakhs",
              "Above 12 Lakhs",
              null,
            ],
            message: "{VALUE} is not a valid income range for min",
          },
          default: null,
        },
        max: {
          type: String,
          enum: {
            values: [
              "Below 1.5 Lakh",
              "1.5-3 Lakhs",
              "3-6 Lakhs",
              "6-12 Lakhs",
              "Above 12 Lakhs",
              null,
            ],
            message: "{VALUE} is not a valid income range for max",
          },
          default: null,
        },
      },
      caste: [
        {
          type: String,
          enum: {
            values: ["SC", "ST", "OBC", "MBC", "FC", "General", "Others", null],
            message: "{VALUE} is not a valid caste",
          },
          default: null,
        },
      ],
      gender: [
        {
          type: String,
          enum: {
            values: ["Male", "Female", "Other", null],
            message: "{VALUE} is not a valid gender",
          },
          default: null,
        },
      ],
      education: [
        {
          type: String,
          enum: {
            values: [
              "Below 8th",
              "8th Pass",
              "10th Pass",
              "12th Pass",
              "Graduate",
              "Postgraduate",
              null,
            ],
            message: "{VALUE} is not a valid education level",
          },
          default: null,
        },
      ],
      maritalStatus: [
        {
          type: String,
          enum: {
            values: ["Single", "Married", "Divorced", "Widowed", null],
            message: "{VALUE} is not a valid marital status",
          },
          default: null,
        },
      ],
      religion: [
        {
          type: String,
          enum: {
            values: ["Hindu", "Muslim", "Christian", "Sikh", "Other", null],
            message: "{VALUE} is not a valid religion",
          },
          default: null,
        },
      ],
      occupation: [
        {
          type: String,
          enum: {
            values: [
              "Agriculture",
              "Government Employee",
              "Private Sector",
              "Self-Employed",
              "Unemployed",
              "Student",
              null,
            ],
            message: "{VALUE} is not a valid occupation",
          },
          default: null,
        },
      ],
      location: [
        // Added to accommodate the JSON document
        {
          type: String,
          trim: true, // Removes whitespace
          default: null,
        },
      ],
    },
    description: {
      // Optional field for additional context
      type: String,
      trim: true,
      default: "",
    },
    active: {
      // Flag to enable/disable schemes
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Retains createdAt and updatedAt
    toJSON: { virtuals: true }, // Enables virtual fields in JSON output
    toObject: { virtuals: true }, // Enables virtual fields in object output
  }
);

// Virtual field example: full eligibility summary
SchemeSchema.virtual("eligibilitySummary").get(function () {
  const { age, income, caste, gender } = this.eligibility;
  return `Age: ${
    age.min || "N/A"
  } - ${age.max || "N/A"}, Income: ${income.min || "N/A"} - ${income.max || "N/A"}, Caste: ${caste.join(", ") || "N/A"}, Gender: ${gender.join(", ") || "N/A"}`;
});

// Compound index for common queries
SchemeSchema.index({
  "eligibility.age.min": 1,
  "eligibility.age.max": 1,
  "eligibility.income.min": 1,
});

const Scheme = mongoose.model("Scheme", SchemeSchema);
export default Scheme;
