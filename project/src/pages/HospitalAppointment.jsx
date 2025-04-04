import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const HospitalAppointment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [purpose, setPurpose] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const sendEmail = () => {
    if (!window.Email) {
      alert("SMTP.js is not loaded yet. Please try again.");
      return;
    }

    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "boralrupak@gmail.com",
      Password: "RUPAKBORAL10032004",
      To: "chandrashekharjnvr@gmail.com",
      From: "boralrupak@gmail.com",
      Subject: "Visitor Information Submission",
      Body: `First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nPurpose: ${purpose}`,
    }).then(() => alert("Mail has been sent successfully"));
  };

  const handleBookAppointment = async() => {
    try{
      await axios.post("http://localhost:5000/send-email", {firstName, lastName, age, gender, purpose}, {withCredentials: true});
      navigate("/")
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Visitor Form</h2>
      <input
        name="firstName"
        placeholder="First Name"
        className="mb-2 p-2 w-full border rounded"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        name="lastName"
        placeholder="Last Name"
        className="mb-2 p-2 w-full border rounded"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        className="mb-2 p-2 w-full border rounded"
        onChange={(e) => setAge(e.target.value)}
      />
      <select
        onChange={(e) => setGender(e.target.value)}
        name="gender"
        className="mb-2 p-2 w-full border rounded"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
        name="purpose"
        placeholder="Purpose of Visit"
        className="mb-4 p-2 w-full border rounded"
        onChange={(e) => setPurpose(e.target.value)}
      />
      <button
        onClick={() => handleBookAppointment()}
        className="w-full p-2 bg-blue-500 text-white rounded flex items-center justify-center"
      >
        <Mail className="mr-2" /> Send Mail
      </button>
    </div>
  );
};

export default HospitalAppointment;
