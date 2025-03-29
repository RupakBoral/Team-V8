const mongoose = require("mongoose");

const DBconnection = async () => {
  await mongoose.connect(
    "mongodb+srv://boralrupak:0fAcslHGy7Wj5X9M@team-v8.pa8ysb8.mongodb.net/team-v8"
  );
};

module.exports = DBconnection;
