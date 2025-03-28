const express = require("express");
const cors = require("cors");
const DBconnection = require("./connection.js");

const app = express();
app.use(cors());
app.use(express.json());

const AuthDoctorRouter = require("./routes/doctor/auth.js");

app.use("/", AuthDoctorRouter);

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
