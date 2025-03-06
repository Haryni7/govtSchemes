import mongoose from "mongoose";

const SchemeSchema = new mongoose.Schema(
  {
    eligibility: {
      age: {
        min: {
          type: String,
          enum: ["Below 18", "18-35", "35-60", "Above 60", null],
          default: null,
        },
        max: {
          type: String,
          enum: ["Below 18", "18-35", "35-60", "Above 60", null],
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
            null,
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
            null,
          ],
          default: null,
        },
      },
      caste: [
        {
          type: String,
          enum: ["SC", "ST", "OBC", "MBC", "FC", "General", "Others", null],
          default: null,
        },
      ],
      gender: [
        {
          type: String,
          enum: ["Male", "Female", "Other", null],
          default: null,
        },
      ],
      education: [
        {
          type: String,
          enum: [
            "Below 8th",
            "8th Pass",
            "10th Pass",
            "12th Pass",
            "Graduate",
            "Postgraduate",
            null,
          ],
          default: null,
        },
      ],
      maritalStatus: [
        {
          type: String,
          enum: ["Single", "Married", "Divorced", "Widowed", null],
          default: null,
        },
      ],
      religion: [
        {
          type: String,
          enum: ["Hindu", "Muslim", "Christian", "Sikh", "Other", null],
          default: null,
        },
      ],
      occupation: [
        {
          type: String,
          enum: [
            "Agriculture",
            "Government Employee",
            "Private Sector",
            "Self-Employed",
            "Unemployed",
            "Student",
            null,
          ],
          default: null,
        },
      ],
      location: [
        {
          type: String,
          enum: [
            "Ariyalur",
            "Chengalpattu",
            "Chennai",
            "Coimbatore",
            "Cuddalore",
            "Dharmapuri",
            "Dindigul",
            "Erode",
            "Kallakurichi",
            "Kanchipuram",
            "Kanyakumari",
            "Karur",
            "Krishnagiri",
            "Madurai",
            "Mayiladuthurai",
            "Nagapattinam",
            "Namakkal",
            "Perambalur",
            "Pudukkottai",
            "Ramanathapuram",
            "Ranipet",
            "Salem",
            "Sivaganga",
            "Tenkasi",
            "Thanjavur",
            "Theni",
            "Thoothukudi",
            "Tiruchirappalli",
            "Tirunelveli",
            "Tirupathur",
            "Tiruppur",
            "Tiruvallur",
            "Tiruvannamalai",
            "Tiruvarur",
            "Vellore",
            "Viluppuram",
            "Virudhunagar",
            "Other",
            null,
          ],
          default: null,
        },
      ],
    },
    applicationProcess: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Scheme = mongoose.model("Scheme", SchemeSchema);
export default Scheme;
