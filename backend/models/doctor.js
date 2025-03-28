const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  MBBS: {
    type: String,
    required: true,
    enum: ["yes", "no"],
  },
  MD: {
    type: String,
    required: true,
    enum: ["yes", "no"],
  },
  specialization: {
    type: String,
  },
  availability: {
    type: String,
    enum: ["yes", "no"],
  },
  verified: {
    type: String,
    enum: ["verified", "pending"],
  },
  noOfPatientsConsulted: {
    type: Number,
    default: 0,
  },
  experience: {
    type: String,
    default: 0,
  },
  fees: {
    type: Number,
    default: undefined,
  },
});

module.exports = mongoose.model("doctor", doctorSchema);
