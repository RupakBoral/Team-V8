const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const DBconnection = require("./connection.js");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5000"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(cookieParser());

const AuthRouter = require("./routes/auth.js");
const ProfileRouter = require("./routes/profile.js");
const ConsultRouter = require("./routes/consult.js");
const AppointmentRouter = require("./routes/appointment.js");
const EmailRouter = require("./routes/email.js");

app.use("/", AuthRouter);

app.use("/", ProfileRouter);

app.use("/", ConsultRouter);

app.use("/", AppointmentRouter);

app.use("/", EmailRouter);

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
