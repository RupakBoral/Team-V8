import { Link } from "react-router-dom";
// import { FaUserMd } from 'react-icons/fa';
import axios from "axios";

function Navbar() {
  const handleLogOut = async () => {
    await axios.get("http://localhost:5000/d/logout", {
      withCredentials: true,
    });
  };

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src=" public/images/logo.jpg" // Replace with your image path
              alt="MedConnect Logo"
              className="h-8 w-auto" // Adjust height & width as needed
            />
            <span className="text-xl font-semibold">MedConnect</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/forum"
              className="text-gray-600 hover:text-gray-900 font-bold"
            >
              Doctor Forum
            </Link>
            <Link
              to="/hospitals"
              className="text-gray-600 hover:text-gray-900 font-bold"
            >
              Hospital Directory
            </Link>
            <Link
              to="/news"
              className="text-gray-600 hover:text-gray-900 font-bold"
            >
              Medi Updates
            </Link>
            <Link
              to="/consultations"
              className="text-gray-600 hover:text-gray-900 font-bold"
            >
              Online Consultations
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900 font-bold"
            >
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Link
              to="/Signup"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              Sign up
            </Link>
            <Link
              onClick={handleLogOut}
              to="/"
              className="text-gray-600 hover:text-gray-900"
            >
              Log out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
