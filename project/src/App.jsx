import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DoctorForum from "./pages/DoctorForum";
import HospitalDirectory from "./pages/HospitalDirectory";
import OnlineConsultation from "./pages/OnlineConsultation";
import DoctorProfile from "./pages/DoctorProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import SignupDoc from "./pages/SignupDoc";
import Appointment from "./pages/Appointment";
import News from "./pages/News";
import MapComponent from "./pages/MapComponent";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forum" element={<DoctorForum />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/hospitals" element={<HospitalDirectory />} />
            <Route path="/consultations" element={<OnlineConsultation />} />
            <Route path="/profile/:id" element={<DoctorProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news" element={<News />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/SignupDocup" element={<SignupDoc />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/map" element={<MapComponent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
