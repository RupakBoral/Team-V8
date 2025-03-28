const express = require("express");
const DoctorModel = require("../../models/doctor");

const AuthRouter = express.Router();

AuthRouter.get("/d/", (req, res) => {
  res.send("Hello Doctor");
});

AuthRouter.post("/d/login", async (req, res) => {
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
    const token = await user.getJWT();
    res.cookie("token", token);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

AuthRouter.post("/d/signup", async (req, res) => {
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
    const token = await user.getJWT();
    res.cookie("token", token);
    res
      .status(200)
      .json({ message: "User created successfully", data: savedUser });
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

AuthRouter.get("/d/logout", async (req, res) => {
  try {
    res.cookie("token", "", { expires: new Date(0) });
    res.status(200).json({ message: "Logged out succefully" });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = AuthRouter;
