const express = require("express");
const DoctorModel = require("../../models/doctor");

const AuthDoctorRouter = express.Router();

AuthDoctorRouter.get("/d/", (req, res) => {
  res.send("Hello Doctor");
});

AuthDoctorRouter.post("/d/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await DoctorModel.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid Credentials!");
    }
    const userPassword = user.password;
    if (userPassword !== password) {
      throw new Error("Invalid Credentials!");
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

AuthDoctorRouter.post("/d/signup", async (req, res) => {
  try {
    const { emailId, password, firstName, lastName, age, gender, MBBS, MD } =
      req.body;
    const isEmailExist = await DoctorModel.findOne({ emailId });
    if (isEmailExist) {
      throw new Error("User already exists");
    }
    const user = new DoctorModel({
      firstName,
      lastName,
      emailId,
      password,
      gender,
      age,
      MBBS,
      MD,
    });
    const savedUser = await user.save();
    res
      .status(200)
      .json({ message: "User created successfully", data: savedUser });
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

module.exports = AuthDoctorRouter;
