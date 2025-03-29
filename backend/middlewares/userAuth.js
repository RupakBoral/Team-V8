var jwt = require("jsonwebtoken");
const DoctorModel = require("../models/doctor");

const userAuth = async (req, res, next) => {
  try {
    // from cookie i will fetch the id and find the user in db
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please Login");
    }
    var decoded = jwt.verify(token, "TEAM-V8");
    const { _id } = decoded;
    const doc = await DoctorModel.findById(_id);
    if (!doc) {
      res.status(400).json({ message: "No doctor found" });
    }
    req.doc = doc;
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { userAuth };