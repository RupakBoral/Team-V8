const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  // Using a nested object to store date details
  bookingDate: {
    month: {
      type: Number,
      min: 1,
      max: 12,
    },
    day: {
      type: Number,
      min: 1,
      max: 31,
    },
    year: {
      type: Number,
    },
  },
  time: {
    type: String,
    enum: ["morning", "afternoon", "evening"],
  },
  consultationType: {
    type: String,
    enum: ["video", "chat"],
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
