const mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

const doctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  emailId: {
    type: String,
  },
  password: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  age: {
    type: Number,
  },
  MBBS: {
    type: String,

    enum: ["yes", "no"],
  },
  MD: {
    type: String,

    enum: ["yes", "no"],
  },
  specialization: {
    type: String,
    lowercase: true,
  },
  availability: {
    type: String,
    enum: ["yes", "no"],
  },
  verified: {
    type: String,
    enum: ["verified", "pending"],
  },
  profilePic: {
    type: String,
  },
  RegistrationId: {
    type: String,
  },
  location: {
    type: String,

    lowercase: true,
  },
  registrationCertificate: {
    type: String,
  },
  contactEmail: {
    type: String,
  },
  hospitalName: {
    type: String,
  },
  hospitalAddress: {
    type: String,
  },
  hospitalContact: {
    type: String,
  },
  hospitalEmail: {
    type: String,
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

doctorSchema.methods.getJWT = async function () {
  const user = this;
  const jwtValue = { _id: user._id };
  var token = jwt.sign(jwtValue, "TEAM-V8");
  return token;
};

module.exports = mongoose.model("doctor", doctorSchema);
