const express = require("express");
const DoctorModel = require("../models/doctor");
const BookingModel = require("../models/bookingSchema");

const AppointmentRouter = express.Router();

AppointmentRouter.post("/book", async (req, res) => {
  try {
    const { firstName, lastName, age, gender, symptoms } = req.body;
    const saveBook = new BookingModel({
      firstName,
      lastName,
      age,
      gender,
      symptoms,
    });
    const savedBook = await saveBook.save();
    res.json({ message: "Booked appointed", data: savedBook });
  } catch (error) {
    console.log(error);
  }
});

AppointmentRouter.get("/appointments", async (req, res) => {
  try {
    const appointments = await BookingModel.find({});
    res.status(200).json({ message: "Data sent", data: appointments });
  } catch (error) {
    console.log(error);
  }
});

module.exports = AppointmentRouter;
