import { useState } from "react";
import {
  // Calendar,
  // Clock,
  Video,
  MessageSquare,
  // AlertCircle,
} from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [symptoms, setSymptoms] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await axios.post(
        "http://localhost:5000/book",
        { firstName, lastName, age, gender, symptoms },
        { withCredentials: true }
      );
      navigate("/consultations");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-slate-500 to-black px-6 py-8">
            <h2 className="text-3xl font-bold text-white">
              Book Your Appointment
            </h2>
            <p className="mt-2 text-blue-100">
              Fill in your details to schedule a consultation
            </p>
          </div>

          <form
            onSubmit={(event) => handleSubmit(event)}
            className="p-6 space-y-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <input
                type="text"
                placeholder="FirstName"
                className="flex-1 p-2 border border-gray-300 rounded-md"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="LastName"
                className="flex-1 p-2 border border-gray-300 rounded-md"
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Age"
                className="flex-1 p-2 border border-gray-300 rounded-md"
                onChange={(e) => setAge(e.target.value)}
              />

              <div className="group">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  required
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="symptoms"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Symptoms
              </label>
              <textarea
                name="symptoms"
                id="symptoms"
                required
                rows={4}
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setSymptoms(e.target.value)}
              />
              <p className="mt-2 text-sm text-gray-500">
                Describe your symptoms in detail
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="group">
                <label
                  htmlFor="preferredDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  id="preferredDate"
                  required
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="group">
                <label
                  htmlFor="preferredTime"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Time
                </label>
                <select
                  name="preferredTime"
                  id="preferredTime"
                  required
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="consultationType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Consultation Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                {["video", "chat"].map((type, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`flex items-center justify-center p-4 rounded-lg border-2 transition `}
                  >
                    {type === "video" ? (
                      <Video className="h-6 w-6 mr-2" />
                    ) : (
                      <MessageSquare className="h-6 w-6 mr-2" />
                    )}
                    <span className="font-medium">
                      {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
                      Consultation
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-slate-600 to-black text-white rounded-xl hover:scale-105 transition"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
