const express = require("express");
const { userAuth } = require("../middlewares/userAuth");
const DoctorModel = require("../models/doctor");

const ProfileRouter = express.Router();

ProfileRouter.get("/d/my-profile", userAuth, async (req, res) => {
  try {
    const doc = req.doc;
    res.status(200).json({ message: "My profile", data: doc });
  } catch (err) {
    console.log(err);
  }
});

ProfileRouter.get("/d/doc-profile/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const doc = await DoctorModel.findById(_id);
    res.status(200).json({ message: "Doctor profile", doc: doc });
  } catch (err) {
    console.log(err);
  }
});

ProfileRouter.post("/d/update-profile", (req, res) => {});

module.exports = ProfileRouter;
