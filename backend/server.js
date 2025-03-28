const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const DBconnection = require("./connection.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const AuthRouter = require("./routes/doctor/auth.js");
const ProfileRouter = require("./routes/doctor/profile.js");

app.use("/", AuthRouter);

app.use("/", ProfileRouter);

DBconnection()
  .then(() => {
    console.log("Connection established");
    app.listen(5000, "0.0.0.0", () => {
      console.log("Server started on port 5000");
    });
  })
  .catch((err) => {
    console.log("Connection failed");
  });
