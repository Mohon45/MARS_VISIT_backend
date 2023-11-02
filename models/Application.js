const mongoose = require("mongoose");
const { Schema } = mongoose;

const applicationSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "fullName is required"],
      unique: true,
    },
    dob: {
      type: String,
      required: [true, "Date of Birth is required"],
    },
    nationality: {
      type: String,
      required: [true, "Nationality is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    departureDate: {
      type: String,
      required: [true, "departureDate is required"],
    },
    returnDate: {
      type: String,
      required: [true, "returnDate is required"],
    },
    accommodationPreference: {
      type: String,
      required: [true, "accommodation Preference is required"],
    },
    specialRequest: {
      type: String,
    },
    healthDeclaration: {
      type: String,
      required: [true, "health Declaration is required"],
    },
    emgContact: {
      type: String,
      required: [true, "emgContact is required"],
    },
    medicalCondition: {
      type: String,
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("application", applicationSchema);

module.exports = Application;
