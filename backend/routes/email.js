const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const EmailRouter = express.Router();
// const PORT = process.env.PORT || 5000;

EmailRouter.use(express.json());
EmailRouter.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "boralrupak@gmail.com",
    pass: "ongq rdid twxs qppk",
  },
});

EmailRouter.post("/send-email", async (req, res) => {
  const { firstName, lastName, age, gender, purpose } = req.body;

  const mailOptions = {
    from: "boralrupak@gmail.com",
    to: "chandrashekharjnvr@gmail.com",
    subject: "Visitor Information Submission",
    text: `First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nPurpose: ${purpose}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error sending email", details: error.message });
  }
});

module.exports = EmailRouter;
