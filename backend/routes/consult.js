const express = require("express");
const DoctorModel = require("../models/doctor");

const ConsultRouter = express.Router();

ConsultRouter.get("/specialize/:specialization", async (req, res) => {
  try {
    const { specialization } = req.params;
    // console.log(specialization);
    const docs = await DoctorModel.find({ specialization: specialization });
    res
      .status(200)
      .json({ message: "Doctor list successfully sent", data: docs });
  } catch (err) {
    console.log(err);
  }
});

ConsultRouter.get("/doctor/:location", async (req, res) => {
  try {
    const { location } = req.params;
    const docs = await DoctorModel.find({ location });
    res
      .status(200)
      .json({ message: "Doctor list successfully sent", data: docs });
  } catch (err) {
    console.log(err);
  }
});

ConsultRouter.get("/doctor/:experience", async (req, res) => {
  try {
    const { experience } = req.params;
    const docs = await DoctorModel.find({ experience });
    res
      .status(200)
      .json({ message: "Doctors list sent sucessfully", data: docs });
  } catch (err) {
    console.log(err);
  }
});

module.exports = ConsultRouter;
